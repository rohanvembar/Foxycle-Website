import DefaultController from "./default.controller";

 import { NextFunction, Request, Response, Router } from "express";
import express from "express";

 import { Announcement } from "../entity";

 import { getRepository } from "typeorm";

 export class AnnouncementController extends DefaultController {
  protected initializeRoutes(): express.Router {
    const router = express.Router();

     router.route("/announcements")
    .get((req: Request, res: Response) => {
      console.log("retrieving all announcements");
      const announcementRepo = getRepository(Announcement);
      announcementRepo.find().then((announcements: Announcement[]) => {
        res.status(200).send( announcements );
      })
    });
    return router;
  }
}
