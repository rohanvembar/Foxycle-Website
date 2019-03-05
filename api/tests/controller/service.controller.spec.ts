import express from "express";
import request from "supertest";
import { Connection } from "typeorm";
import { DBConnection } from "../../connection";
import { Server } from "../../server";
import DBUtils from "../util/database";
import { Service, Category } from "../../entity";

describe("/service", () => {
    let myApp: express.Application;
    let connection: Connection;
  
    const createService = (
        category: string,
        conn: Connection
      ): Promise<Service> => {
        const service = new Service();
        service.id = 1
        service.title = "test"
        service.price = 10
        service.description = "test"
        service.category = category
        return conn.getRepository(Service).save(service);
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
            .get("/servicesTuneUps")
            .then((response: request.Response) => {
              expect(response.body).toEqual([]);
              done();
            });
        });
        test("should return a list of contacts", done => {
            return createService("tune-ups", connection).then((createdService: Service) => {
                return request(myApp)
                  .get("/servicesTuneUps")
                  .expect(200)
                  .then((response: request.Response) => {
                    expect(response.body.length).toEqual(1);
                    expect(response.body[0].category).toEqual("tune-ups");
                    done();
                  });
              });
        });
        test("should return an empty list because there isn't anything in the database", done => {
            request(myApp)
              .get("/servicesAdjust")
              .then((response: request.Response) => {
                expect(response.body).toEqual([]);
                done();
              });
          });
          test("should return a list of contacts", done => {
              return createService("adjustments", connection).then((createdService: Service) => {
                  return request(myApp)
                    .get("/servicesAdjust")
                    .expect(200)
                    .then((response: request.Response) => {
                      expect(response.body.length).toEqual(1);
                      expect(response.body[0].category).toEqual("adjustments");
                      done();
                    });
                });
          });
          test("should return an empty list because there isn't anything in the database", done => {
            request(myApp)
              .get("/servicesInst")
              .then((response: request.Response) => {
                expect(response.body).toEqual([]);
                done();
              });
          });
          test("should return a list of contacts", done => {
              return createService("installations", connection).then((createdService: Service) => {
                  return request(myApp)
                    .get("/servicesInst")
                    .expect(200)
                    .then((response: request.Response) => {
                      expect(response.body.length).toEqual(1);
                      expect(response.body[0].category).toEqual("installations");
                      done();
                    });
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
            test("should delete given service from table", done => {
              return createService("installations", connection).then((createdService: Service) => {
                request(myApp)
                  .delete("/services/1")
                  .expect(200)
                  .then((response: request.Response) => {
                    console.log(response.body)
                    expect(response.body.title).toEqual("test");
                    done();
                  })
              });
            });
          }) 
      }); 
  });
  