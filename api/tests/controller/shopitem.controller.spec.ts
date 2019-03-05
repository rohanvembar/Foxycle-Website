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
        test("should return 404", done => {
            request(myApp)
                .get("/shopitem/1")
                .then((response: request.Response) => {
                    expect(404);
                    done();
                });
        });
        test("should return item with given id", done => {
            return createBrand(connection).then((createdBrand: Brand) => {
                return createItem(connection).then((createdItem: ShopItem) => {
                    return request(myApp)
                        .get("/shopitem/1")
                        .expect(200)
                        .then((response: request.Response) => {
                            expect(response.body.name).toEqual("Bike");
                            done();
                        });
                });
            });
        });
        describe("PUT '/", () => {
            test("should update shop item", done => {
                return createBrand(connection).then((createdBrand: Brand) => {
                    return createItem(connection).then((item: ShopItem) => {
                        return request(myApp)
                            .put("/shopitem/1")
                            .send({
                                name: "new name",
                                price: 300,
                                saleprice: 1,
                                brand: 3,
                                categoryId: 4,
                                image: "new",
                                delivery: true,
                                quantity: 5,
                                description: "new"
                            })
                            .expect(200)
                            .then((response: request.Response) => {
                                expect(response.body.name).toEqual("new name");
                                done();
                            });
                    });
                });
            });
            test("should update shop item", done => {
                return createBrand(connection).then((createdBrand: Brand) => {
                    return createItem(connection).then((item: ShopItem) => {
                        return request(myApp)
                            .put("/shopitem/3")
                            .send({
                                name: "new name",
                                price: 300,
                                saleprice: 1,
                                brand: 3,
                                categoryId: 4,
                                image: "new",
                                delivery: true,
                                quantity: 5,
                                description: "new"
                            })
                            .then((response: request.Response) => {
                                expect(404);
                                done();
                            });
                    });
                });
            });
        });
        describe("DELETE '/", () => {
            test("should delete given shop item from table", done => {
                return createBrand(connection).then((createdBrand: Brand) => {
                    return createItem(connection).then((createdItem: ShopItem) => {
                        request(myApp)
                            .delete("/deleteitem/1")
                            .expect(200)
                            .then((response: request.Response) => {
                                console.log(response.body)
                                expect(response.body.name).toEqual("Bike");
                                done();
                            })
                    });
                });
            });
            test("should get 404", done => {
                return createBrand(connection).then((createdBrand: Brand) => {
                    return createItem(connection).then((createdItem: ShopItem) => {
                        request(myApp)
                            .delete("/deleteitem/3")
                            .then((response: request.Response) => {
                                console.log(response.body)
                                expect(404);
                                done();
                            })
                    });
                });
            });
        });
        describe("POST '/", () => {
            test("should create a new shop item", done => {
                return createBrand(connection).then((createdBrand: Brand) => {
                    return request(myApp)
                        .post("/newitem")
                        .send({
                            name: "new name",
                            price: 300,
                            saleprice: 1,
                            brandId: 3,
                            categoryId: 4,
                            image: "new",
                            delivery: true,
                            quantity: 5,
                            description: "new"
                        })
                        .expect(200)
                        .then((response: request.Response) => {
                            expect(response.body.name).toEqual("new name");
                            done();
                        });
                });
            });
        });
    });
});
