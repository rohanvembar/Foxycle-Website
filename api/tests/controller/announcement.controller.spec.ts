import express from "express";
import request from "supertest";
import { Connection } from "typeorm";
import { DBConnection } from "../../connection";
import { Server } from "../../server";
import DBUtils from "../util/database";
import { Announcement } from "../../entity";

describe("/announcements", () => {
    let myApp: express.Application;
    let connection: Connection;
  
    const createAnnouncement = (
        conn: Connection
      ): Promise<Announcement> => {
        const announcement = new Announcement();
        announcement.id = 1
        announcement.date = "2-2-19";
        announcement.title = "test";
        announcement.body = "test body";
        return conn.getRepository(Announcement).save(announcement);
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
            .get("/announcements")
            .then((response: request.Response) => {
              expect(response.body).toEqual([]);
              done();
            });
        });
        test("should return a list of announcements", done => {
            return createAnnouncement(connection).then((createdAnnouncement: Announcement) => {
                return request(myApp)
                  .get("/announcements")
                  .expect(200)
                  .then((response: request.Response) => {
                    expect(response.body.length).toEqual(1);
                    expect(response.body[0].title).toEqual("test");
                    done();
                  });
              });
        });
      });  
      describe("POST '/'", () => {
        test("should create a new announcement", done => {
          const date = "2-2-19";
          const title = "test";
          const body = "test body";
          return request(myApp)
            .post("/newannouncement")
            .send({
              title: title,
              body: body,
              date: date
            })
            .expect(200)
            .then((response: request.Response) => {
              expect(response.body.date).toEqual(date);
              expect(response.body.title).toEqual(title);
              expect(response.body.body).toEqual(body);
              done();
            });
        });
      });
      describe("DELETE '/", () => {
        test("should delete given announcement from table", done => {
          return createAnnouncement(connection).then((createdUser: Announcement) => {
            request(myApp)
              .delete("/announcements/1")
              .expect(200)
              .then((response: request.Response) => {
                console.log(response.body)
                expect(response.body.title).toEqual("test");
                done();
              })
          });
        });
        test("should get 404", done => {
          return createAnnouncement(connection).then((createdUser: Announcement) => {
            request(myApp)
              .delete("/announcements/2")
              .then((response: request.Response) => {
                expect(404);
                done();
              })
          });
        });
      })      
  });
  