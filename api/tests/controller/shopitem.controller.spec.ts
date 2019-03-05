import express from "express";
import request from "supertest";
import { Connection } from "typeorm";
import { DBConnection } from "../../connection";
import { ShopItem, Brand } from "../../entity";
import { Server } from "../../server";
import DBUtils from "../util/database";

describe("/shopitem", () => {
    let myApp: express.Application;
    let connection: Connection;

    const createBrand = (
        conn: Connection
    ): Promise<Brand> => {
        const brand = new Brand();
        brand.id = 3
        brand.name = "brand"
        return conn.getRepository(Brand).save(brand);
    }
    const createItem = (
        conn: Connection
    ): Promise<ShopItem> => {
        const item = new ShopItem();
        item.id = 1;
        item.name = "Bike";
        item.price = 200;
        item.brand = 3;
        item.categoryId = 300;
        item.image = "";
        item.delivery = true;
        item.quantity = 5;
        item.description = "test description";
        return conn.getRepository(ShopItem).save(item);
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
                .get("/shopitems")
                .then((response: request.Response) => {
                    expect(response.body).toEqual([]);
                    done();
                });
        });
        test("should return one item", done => {
            return createBrand(connection).then((createdBrand: Brand) => {
                return createItem(connection).then((createdItem: ShopItem) => {
                    return request(myApp)
                        .get("/shopitems")
                        .expect(200)
                        .then((response: request.Response) => {
                            expect(
                                response.body && response.body.length
                            ).toEqual(1);
                            expect(response.body[0].name).toEqual("Bike");
                            done();
                        });
                });
            });
        });
        test("should return an empty list because there isn't anything in the database", done => {
            request(myApp)
                .get("/shopitemsbrands/10293")
                .then((response: request.Response) => {
                    expect(response.body).toEqual([]);
                    done();
                });
        });
        test("should return items with brand id", done => {
            return createBrand(connection).then((createdBrand: Brand) => {
                return createItem(connection).then((createdItem: ShopItem) => {
                    return request(myApp)
                        .get("/shopitemsbrands/3")
                        .expect(200)
                        .then((response: request.Response) => {
                            expect(
                                response.body && response.body.length
                            ).toEqual(1);
                            expect(response.body[0].name).toEqual("Bike");
                            done();
                        });
                });
            });
        });
    });
});
