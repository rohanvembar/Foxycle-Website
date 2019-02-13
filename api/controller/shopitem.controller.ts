import DefaultController from "./default.controller";

import { NextFunction, Request, Response, Router } from "express";
import express from "express";

import { ShopItem } from "../entity";

import { getRepository } from "typeorm";

export class ShopItemController extends DefaultController {
    protected initializeRoutes(): express.Router {
        const router = express.Router();
        const shopItemRepo = getRepository(ShopItem);
        router.route("/shopitems")
            .get((req: Request, res: Response) => {
                console.log("retrieving all shop items");
                shopItemRepo.find().then((items: ShopItem[]) => {
                    res.status(200).send(items);
                })
            });
        router.route("/newitem")
            .post((req: Request, res: Response) => {
                console.log("adding a new shop item");
                const newItem = new ShopItem();
                newItem.name = req.body.name;
                newItem.price = req.body.price;
                newItem.brand = req.body.brand;
                newItem.categories = req.body.categories;
                newItem.image = req.body.image;
                newItem.delivery = req.body.delivery;
                newItem.quantity = req.body.quantity;
                newItem.description = req.body.description;
                shopItemRepo.save(newItem).then((savedItem: ShopItem) => {
                    res.status(200).send(savedItem);
                    console.log(savedItem);
                });
            });
        return router;
    }
}