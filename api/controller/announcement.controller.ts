import DefaultController from "./default.controller";

import { NextFunction, Request, Response, Router } from "express";
import express from "express";

import { Announcement } from "../entity";

import { getRepository } from "typeorm";

export class AnnouncementController extends DefaultController {
  protected initializeRoutes(): express.Router {
    const router = express.Router();
    const announcementRepo = getRepository(Announcement);
    router.route("/announcements")
      .get((req: Request, res: Response) => {
        console.log("retrieving all announcements");
        announcementRepo.find().then((announcements: Announcement[]) => {
          announcements = announcements.reverse();
          res.status(200).send(announcements);
        })
      });
    router.route("/newannouncement")
      .post((req: Request, res: Response) => {
        console.log("adding a new announcement");
        const newAnnouncement = new Announcement();
        newAnnouncement.title = req.body.title;
        newAnnouncement.body = req.body.body;
        newAnnouncement.date = req.body.date;
        announcementRepo.save(newAnnouncement).then((savedAnnouncement: Announcement) => {
          res.status(200).send(savedAnnouncement);
          console.log(savedAnnouncement);
        });
      });
    router.route("/announcements/:id")
      .delete((req: Request, res: Response) => {
        announcementRepo.findOne(req.params.id).then((foundAnnouncement: Announcement | undefined) => {
          if (foundAnnouncement == undefined) {
            res.sendStatus(404);
            return;
          }
          announcementRepo.delete(foundAnnouncement).then(x => {
            res.status(200).send(foundAnnouncement);
            console.log(foundAnnouncement);
          });
        });
      });
    return router;
  }
}
