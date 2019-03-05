import express from "express";
import request from "supertest";
import { Connection } from "typeorm";
import { DBConnection } from "../../connection";
import { User, Session } from "../../entity";
import { Server } from "../../server";
import DBUtils from "../util/database";

import { getConnection } from "typeorm";

describe("/login", () => {
  let app: express.Application;
  let connection: Connection;

  const createSession = (
    conn: Connection
  ): Promise<Session> => {
    const session = new Session();
    session.id = 1
    session.expiresAt = new Date();
    return conn.getRepository(Session).save(session);
  };

  beforeAll(async () => {
    app = await new Server().getMyApp();
    connection = getConnection();
    await connection.synchronize();
    await DBUtils.clearDB();
  });

  afterAll(async () => {
    await DBConnection.closeConnection();
  });

  test("should logout successfully", done => {
    return request(app)
      .post("/logout")
      .expect(200)
      .then((res: request.Response) => {
        expect({ loggedout: true });
        done();
      });
  });
  test("should login unsuccessfully", done => {
    request(app)
      .post("/login")
      .send({ emailAddress: "test@test.com", password: "password" })
      .then((res: request.Response) => {
        expect(401);
        done();
      });
  });
  test("should login successfully", done => {
    connection.manager.insert(User, {
      emailAddress: "test@test.com",
      firstName: "test",
      lastName: "test",
      password: "password",
      role: 0
    }).then(() => {
      request(app)
        .post("/login")
        .send({ emailAddress: "test@test.com", password: "password" })
        .expect(200)
        .then((res: request.Response) => {
          expect(res.body.token).toBeDefined();
          done();
        });
    });
  });
  test("should logout successfully", done => {
    return createSession(connection).then((createdSession: Session) => {
      return request(app)
        .post("/logout")
        .expect(200)
        .then((res: request.Response) => {
          expect({ loggedout: true });
          done();
        });
    });
  });
});
