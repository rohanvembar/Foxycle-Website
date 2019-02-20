import DefaultController from "./default.controller";

import { NextFunction, Request, Response, Router } from "express";
import express from "express";

import { Contact } from "../entity";

import { getRepository } from "typeorm";


export class ContactController extends DefaultController {
  protected initializeRoutes(): express.Router {
    const router = express.Router();
    const contactRepo = getRepository(Contact);
    router.route("/contacts")
      .get((req: Request, res: Response) => {
        console.log("retrieving contact information");
        contactRepo.find().then((contacts: Contact[]) => {
          res.status(200).send(contacts);
        })
      });
    router.route("/contacts/:id")
      .put((req: Request, res: Response) => {
        contactRepo.findOne(req.params.id).then((foundContact: Contact | undefined) => {
          if (foundContact == undefined) {
            return;
          }

          foundContact.monHours = req.body.monHours;
          foundContact.tueHours = req.body.tueHours;
          foundContact.wedHours = req.body.wedHours;
          foundContact.thuHours = req.body.thuHours;
          foundContact.friHours = req.body.friHours;
          foundContact.satHours = req.body.satHours;
          foundContact.sunHours = req.body.sunHours;
          foundContact.phoneNumber = req.body.phoneNumber;
          foundContact.address = req.body.address;
          foundContact.email = req.body.email;

          contactRepo.save(foundContact).then((updatedContact: Contact) => {
            console.log(updatedContact)
            res.status(200).send(updatedContact);
          });
        });
      });




    return router;
  }
}