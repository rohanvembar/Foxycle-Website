import express from "express";
import request from "supertest";
import { Connection } from "typeorm";
import { DBConnection } from "../../connection";
import { Server } from "../../server";
import DBUtils from "../util/database";
import { Category } from "../../entity";

describe("/category", () => {
    let myApp: express.Application;
    let connection: Connection;
  
    const createCategory = (
        name: string,
        conn: Connection
      ): Promise<Category> => {
        const category = new Category();
        category.id = 1
        category.categoryId = 12345678
        category.category = name
        return conn.getRepository(Category).save(category);
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
            .get("/itemscategory")
            .then((response: request.Response) => {
              expect(response.body).toEqual([]);
              done();
            });
        });
        test("should return a list of categories", done => {
            return createCategory("bikes", connection).then((createdCategory: Category) => {
                return request(myApp)
                  .get("/itemscategory")
                  .expect(200)
                  .then((response: request.Response) => {
                    expect(response.body.length).toEqual(1);
                    expect(response.body[0].category).toEqual("bikes");
                    done();
                  });
              });
        });
        test("should return an empty list because there isn't anything in the database", done => {
            request(myApp)
              .get("/itemscategory/12345678")
              .then((response: request.Response) => {
                expect(response.body).toEqual([]);
                done();
              });
          });
          test("should return a list of categories", done => {
              return createCategory("bikes", connection).then((createdCategory: Category) => {
                  return request(myApp)
                    .get("/itemscategory/12345678")
                    .expect(200)
                    .then((response: request.Response) => {
                      expect(response.body.length).toEqual(1);
                      expect(response.body[0].category).toEqual("bikes");
                      done();
                    });
                });
          });
          test("should return an empty list because there isn't anything in the database", done => {
            request(myApp)
              .get("/itemscategory/11111111")
              .then((response: request.Response) => {
                expect(response.body).toEqual([]);
                done();
              });
          });
          describe("POST '/'", () => {
            test("should create a new service", done => {
              return request(myApp)
                .post("/newservice")
                .send({
                    title: "test",
                    price: 10,
                    body: "test",
                    category: "installations"
                })
                .expect(200)
                .then((response: request.Response) => {
                  expect(response.body.title).toEqual("test");
                  expect(response.body.price).toEqual(10);
                  expect(response.body.category).toEqual("installations");
                  done();
                });
            });
          });
          describe("DELETE '/", () => {
            test("should delete given category from table", done => {
              return createCategory("bikes", connection).then((createdCategory: Category) => {
                request(myApp)
                  .delete("/deletecategory/12345678")
                  .expect(200)
                  .then((response: request.Response) => {
                    console.log(response.body)
                    expect(response.body.category).toEqual("bikes");
                    done();
                  })
              });
            });
          }) 
      }); 
  });
  