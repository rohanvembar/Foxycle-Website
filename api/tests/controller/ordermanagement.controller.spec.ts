import express from "express";
import request from "supertest";
import { Connection } from "typeorm";
import { DBConnection } from "../../connection";
import { Server } from "../../server";
import DBUtils from "../util/database";
import { OrderManagement } from "../../entity";

describe("/ordermanagement", () => {
  let myApp: express.Application;
  let connection: Connection;

  const createOrderManagement = (
    conn: Connection
  ): Promise<OrderManagement> => {
    const ordermanagement = new OrderManagement();
    ordermanagement.orderNumber = 12345678
    ordermanagement.status = 1
    ordermanagement.dateOrdered = "2-1-19"
    ordermanagement.mailingAddress = "test"
    ordermanagement.subtotal = 100
    ordermanagement.shippingCost = 10
    ordermanagement.total = 110
    ordermanagement.name = "test"
    ordermanagement.email = "test"
    return conn.getRepository(OrderManagement).save(ordermanagement);
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
        .get("/orders")
        .then((response: request.Response) => {
          expect(response.body).toEqual([]);
          done();
        });
    });
    test("should return a list of orders", done => {
      return createOrderManagement(connection).then((order: OrderManagement) => {
        return request(myApp)
          .get("/orders")
          .expect(200)
          .then((response: request.Response) => {
            expect(response.body.length).toEqual(1);
            expect(response.body[0].orderNumber).toEqual(12345678);
            done();
          });
      });
    });
    var id = 12345678;
    test("should return a 404 status because there isn't anything in the database", done => {
      request(myApp)
        .get("/order/" + id)
        .then((response: request.Response) => {
          expect(404);
          done();
        });
    });
    test("should return the order with the given id", done => {
      return createOrderManagement(connection).then((createdUser: OrderManagement) => {
        return request(myApp)
          .get("/order/" + id)
          .expect(200)
          .then((response: request.Response) => {
            expect(response.body.name).toEqual("test");
            done();
          });
      });
    });
  });
  describe("PUT '/", () => {
    test("should update status", done => {
      return createOrderManagement(connection).then((order: OrderManagement) => {
        return request(myApp)
          .put("/updatestatus/" + 12345678 + "/" + 4)
          .expect(200)
          .then((response: request.Response) => {
            expect(response.body.status).toEqual("4");
            done();
          });
      });
    });
    test("should get 404", done => {
      return createOrderManagement(connection).then((order: OrderManagement) => {
        return request(myApp)
          .put("/updatestatus/" + 11111111 + "/" + 4)
          .then((response: request.Response) => {
            expect(404);
            done();
          });
      });
    });
  });
  describe("POST '/", () => {
    test("should create a new order", done => {
      return request(myApp)
        .post("/neworder")
        .send({
          orderNumber: 12345678,
          status: 1,
          date: "2-1-19",
          address: "test",
          subtotal: 300,
          total: 310,
          shippingCost: 10,
          name: "test",
          email: "test"
        })
        .expect(200)
        .then((response: request.Response) => {
          expect(response.body.orderNumber).toEqual(12345678);
          done();
        });
    });
  });
});
