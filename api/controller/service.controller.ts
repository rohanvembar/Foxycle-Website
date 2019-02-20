import DefaultController from "./default.controller";

 import { NextFunction, Request, Response, Router } from "express";
import express from "express";

 import { Service } from "../entity";

 import { getRepository } from "typeorm";

 export class ServiceController extends DefaultController {
  protected initializeRoutes(): express.Router {
    const router = express.Router();
    const serviceRepo = getRepository(Service);

     router.route("/servicesTuneUps")
    .get((req: Request, res: Response) => {
      console.log("retrieving all tuneups");
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
      serviceRepo.find({where: [
          {category : "installations"}
          
      ]})
      .then((servicesInst: Service []) => {
        res.status(200).send( servicesInst );
      })
    });
    router.route("/newservice")
    .post((req: Request, res: Response) => {
      const newService = new Service();
      newService.title = req.body.title;
      newService.description = req.body.body;
      newService.price = req.body.price;
      newService.category = req.body.category;
      serviceRepo.save(newService).then((savedService: Service) => {
        res.status(200).send(savedService);
        console.log(savedService);
      });
    });
    return router;
  }
}
