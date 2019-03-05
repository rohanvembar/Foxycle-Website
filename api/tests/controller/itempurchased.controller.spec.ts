import express from "express";
import request from "supertest";
import { Connection } from "typeorm";
import { DBConnection } from "../../connection";
import { ItemPurchased } from "../../entity";
import { Server } from "../../server";
import DBUtils from "../util/database";

describe("/users", () => {
  let myApp: express.Application;
  let connection: Connection;

  const createItemPurchased = (
    conn: Connection
  ): Promise<ItemPurchased> => {
    const item = new ItemPurchased();
    item.id = 1;
    item.orderNumber = 12345678;
    item.itemId = 2;
    item.quantity = 3;
    item.subtotal = 300;
    return conn.getRepository(ItemPurchased).save(item);
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
        .get("/purchaseditems")
        .then((response: request.Response) => {
          expect(response.body).toEqual([]);
          done();
        });
    });
    test("should return one item purchased", done => {
      return createItemPurchased(connection).then((createdItem: ItemPurchased) => {
        return request(myApp)
          .get("/purchaseditems")
          .expect(200)
          .then((response: request.Response) => {
            expect(
              response.body && response.body.length
            ).toEqual(1);
            expect(response.body[0].orderNumber).toEqual(12345678);
            done();
          });
      });
    });
  });
  describe("POST '/'", () => {
    test("should create a new itempurchased", done => {
      return request(myApp)
        .post("/newitempurchased")
        .send({
            orderNumber: 11111111,
            itemId: 2,
            quantity: 5,
            subtotal: 1000
        })
        .then((response: request.Response) => {
          expect(response.body.orderNumber).toEqual(11111111);
          done();
        });
    });
  });
});
