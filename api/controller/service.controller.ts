import DefaultController from "./default.controller";

 import { NextFunction, Request, Response, Router } from "express";
import express from "express";

 import { Service } from "../entity";

 import { getRepository } from "typeorm";

 export class ServiceController extends DefaultController {
  protected initializeRoutes(): express.Router {
    const router = express.Router();

     router.route("/servicesTuneUps")
    .get((req: Request, res: Response) => {
      console.log("retrieving all tuneups");
      const serviceRepo = getRepository(Service);
      serviceRepo.find({where: [
               {category : "tune-ups"}
          ]}).then((servicesTuneUps: Service []) => {
        res.status(200).send( servicesTuneUps );
      })

    //   serviceRepo.find({where: [
    //      {category : "adjustments"}
    //     ]}).then((servicesAdjust: Service []) => {
    //     res.status(200).send( servicesAdjust );
    //     })

    });

    router.route("/servicesAdjust")
    .get((req: Request, res: Response) => {
      console.log("retrieving adjustements");
      const serviceRepo = getRepository(Service);
      serviceRepo.find({where: [
          {category : "adjustments"}
      ]})
      .then((servicesAdjust: Service []) => {
        res.status(200).send( servicesAdjust );
      })
    });

    router.route("/servicesInst")
    .get((req: Request, res: Response) => {
      console.log("retrieving installations");
      const serviceRepo = getRepository(Service);
      serviceRepo.find({where: [
          {category : "installations"}
          
      ]})
      .then((servicesInst: Service []) => {
        res.status(200).send( servicesInst );
      })
    });
    return router;
  }
}
