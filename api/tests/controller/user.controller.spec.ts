import express from "express";
import request from "supertest";
import { Connection } from "typeorm";
import { DBConnection } from "../../connection";
import { User } from "../../entity";
import { Server } from "../../server";
import DBUtils from "../util/database";

describe("/users", () => {
  let myApp: express.Application;
  let connection: Connection;

  const createUser = (
    emailAddress: string,
    conn: Connection
  ): Promise<User> => {
    const user = new User();
    user.id = 1;
    user.emailAddress = emailAddress;
    user.firstName = "testUser";
    user.lastName = "testUser";
    user.password = "password";
    user.role = 1;
    return conn.getRepository(User).save(user);
  };

  beforeAll(async () => {
    myApp = await new Server().getMyApp();
    connection = await DBConnection.getConnection();
    await connection.synchronize();
  });

  beforeEach(async () => {
    await DBUtils.clearDB();
  });

  afterAll(async () => {
    DBConnection.closeConnection();
  });

  describe("GET '/'", () => {
    test("should return an empty list because there isn't anything in the database", done => {
      request(myApp)
        .get("/users")
        .then((response: request.Response) => {
          expect(response.body).toEqual({ users: [] });
          done();
        });
    });
    test("should return one user", done => {
      const email = "test@test.com";
      return createUser(email, connection).then((createdUser: User) => {
        return request(myApp)
          .get("/users")
          .expect(200)
          .then((response: request.Response) => {
            expect(
              response.body.users && response.body.users.length
            ).toEqual(1);
            expect(response.body.users[0].emailAddress).toEqual(email);
            done();
          });
      });
    });
    test("should return an empty list because there isn't anything in the database", done => {
      request(myApp)
        .get("/employees")
        .then((response: request.Response) => {
          expect(response.body).toEqual([]);
          done();
        });
    });
    test("should return one user", done => {
      const email = "test@test.com";
      return createUser(email, connection).then((createdUser: User) => {
        return request(myApp)
          .get("/employees")
          .expect(200)
          .then((response: request.Response) => {
            expect(
              response.body && response.body.length
            ).toEqual(1);
            expect(response.body[0].emailAddress).toEqual(email);
            done();
          });
      });
    });
    var id = 1;
    test("should return a 404 status because there isn't anything in the database", done => {
      request(myApp)
        .get("/users/" + id)
        .then((response: request.Response) => {
          expect(response.body.reason).toEqual("no user with that id exists");
          done();
        });
    });
    test("should return the user with the given id", done => {
      const email = "test@test.com";
      return createUser(email, connection).then((createdUser: User) => {
        return request(myApp)
          .get("/users/" + id)
          .expect(200)
          .then((response: request.Response) => {
            expect(response.body.user.emailAddress).toEqual(email);
            done();
          });
      });
    });
  });
  describe("POST '/'", () => {
    test("should create a user", done => {
      const email = `test${new Date().getTime()}@test.com`;
      return request(myApp)
        .post("/users")
        .send({
          emailAddress: email,
          firstName: "test",
          lastName: "test",
          password: "password",
          role: 1
        })
        .then((response: request.Response) => {
          expect(response.body.createdUser.emailAddress).toEqual(email);
          done();
        });
    });
  });
  describe("PUT '/", () => {
    test("should change user's role", done => {
      const email = "test@test.com";
      return createUser(email, connection).then((createdUser: User) => {
        return request(myApp)
          .put("/employees/1")
          .expect(200)
          .then((response: request.Response) => {
            expect(response.body.role).toEqual(0);
            done();
          });
      });
    });
  })
  describe("DELETE '/", () => {
    test("should delete given user from table", done => {
      const email = "test@test.com";
      return createUser(email, connection).then((createdUser: User) => {
        request(myApp)
          .delete("/employees/1")
          .expect(200)
          .then((response: request.Response) => {
            console.log(response.body)
            expect(response.body.emailAddress).toEqual(email);
            done();
          })
      });
    });
  })
});
