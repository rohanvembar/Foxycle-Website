import DefaultController from "./default.controller";

import { NextFunction, Request, Response, Router } from "express";
import express from "express";

import { ShopItem } from "../entity";

import { getRepository } from "typeorm";

export class ShopItemController extends DefaultController {
  protected initializeRoutes(): express.Router {
    const router = express.Router();

     router.route("/shopitems")
    .get((req: Request, res: Response) => {
      console.log("retrieving all shop items");
      const shopItemRepo = getRepository(ShopItem);
      shopItemRepo.find().then((items: ShopItem[]) => {
        res.status(200).send( items );
      })
    });
    return router;
  }
}