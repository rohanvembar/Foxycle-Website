import express from "express";
import request from "supertest";
import { Connection } from "typeorm";
import { DBConnection } from "../../connection";
import { Server } from "../../server";
import DBUtils from "../util/database";
import { Contact } from "../../entity";

describe("/contact", () => {
    let myApp: express.Application;
    let connection: Connection;
  
    const createContact = (
        conn: Connection
      ): Promise<Contact> => {
        const contact = new Contact();
        contact.id = 1
        contact.monHours = "test"
        contact.tueHours = "test"
        contact.wedHours = "test"
        contact.thuHours = "test"
        contact.friHours = "fri"
        contact.satHours = "sat"
        contact.sunHours = "test"
        contact.phoneNumber = "test"
        contact.address = "test"
        contact.email = "test"
        contact.map = "test"
        return conn.getRepository(Contact).save(contact);
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
            .get("/contacts")
            .then((response: request.Response) => {
              expect(response.body).toEqual([]);
              done();
            });
        });
        test("should return a list of contacts", done => {
            return createContact(connection).then((createdContact: Contact) => {
                return request(myApp)
                  .get("/contacts")
                  .expect(200)
                  .then((response: request.Response) => {
                    expect(response.body.length).toEqual(1);
                    expect(response.body[0].friHours).toEqual("fri");
                    done();
                  });
              });
        });
      }); 
      describe("PUT '/", () => {
        test("should update contact", done => {
          return createContact(connection).then((createdContact: Contact) => {
            return request(myApp)
              .put("/contacts/1")
              .send({
                monHours: "new",
                tueHours: "new",
                wedHours: "new",
                thuHours: "new",
                friHours: "new",
                satHours: "new",
                sunHours: "new",
                phoneNumber: "new",
                address: "new",
                email: "new"
              })
              .expect(200)
              .then((response: request.Response) => {
                expect(response.body.friHours).toEqual("new");
                done();
              });
          });
        });
      }) 
  });
  