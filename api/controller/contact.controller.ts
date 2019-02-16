import DefaultController from "./default.controller";

import { NextFunction, Request, Response, Router } from "express";
import express from "express";

 import { Contact } from "../entity";

 import { getRepository } from "typeorm";


 export class ContactController extends DefaultController {
  protected initializeRoutes(): express.Router {
    const router = express.Router();

     router.route("/contacts")
    .get((req: Request, res: Response) => {
      console.log("retrieving contact information");
      const contactRepo = getRepository(Contact);
      contactRepo.find().then((contacts: Contact[]) => {
          res.status(200).send( contacts );
      })
    });
    



    return router;
  }
}