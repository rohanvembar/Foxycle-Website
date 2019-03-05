import express from "express";
import request from "supertest";
import { Connection } from "typeorm";
import { DBConnection } from "../../connection";
import { Server } from "../../server";
import DBUtils from "../util/database";
import { Brand } from "../../entity";

describe("/brand", () => {
    let myApp: express.Application;
    let connection: Connection;
  
    const createBrand = (
        conn: Connection
      ): Promise<Brand> => {
        const brand = new Brand();
        brand.id = 1
        brand.name = "TestName";
        return conn.getRepository(Brand).save(brand);
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
            .get("/brands")
            .then((response: request.Response) => {
              expect(response.body).toEqual([]);
              done();
            });
        });
        test("should return a list of brands", done => {
            return createBrand(connection).then((createdBrand: Brand) => {
                return request(myApp)
                  .get("/brands")
                  .expect(200)
                  .then((response: request.Response) => {
                    expect(response.body.length).toEqual(1);
                    expect(response.body[0].name).toEqual("TestName");
                    done();
                  });
              });
        });
        test("should return a 404 status because there isn't anything in the database", done => {
          request(myApp)
            .get("/brands/1")
            .then((response: request.Response) => {
              expect(404);
              done();
            });
        });
        test("should return the brand with the given id", done => {
          return createBrand(connection).then((createdBrand: Brand) => {
            return request(myApp)
              .get("/brands/1")
              .expect(200)
              .then((response: request.Response) => {
                expect(response.body.name).toEqual("TestName");
                done();
              });
          });
        });
      });  
      describe("POST '/'", () => {
        test("should create a new brand", done => {
          const name = "test";
          return request(myApp)
            .post("/newbrand")
            .send({
              name: name,
            })
            .expect(200)
            .then((response: request.Response) => {
              expect(response.body.name).toEqual(name);
              done();
            });
        });
      });   
  });
  