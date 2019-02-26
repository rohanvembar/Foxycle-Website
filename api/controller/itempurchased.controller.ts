import DefaultController from "./default.controller";

import { NextFunction, Request, Response, Router } from "express";
import express from "express";

import { ItemPurchased } from "../entity";

import { getRepository } from "typeorm";

export class ItemPurchasedController extends DefaultController {
    protected initializeRoutes(): express.Router {
        const router = express.Router();
        const itemsPurchasedRepo = getRepository(ItemPurchased);
        router.route("/itemspurchased")
            .get((req: Request, res: Response) => {
                console.log("retrieving all items purchased");
                itemsPurchasedRepo.find().then((items: ItemPurchased[]) => {
                    res.status(200).send(items);
                })
            });
        router.route("/newitempurchased")
            .post((req: Request, res: Response) => {
                console.log("adding a new item purchased");
                const newItemPurchased = new ItemPurchased();
                newItemPurchased.orderNumber = req.body.orderNumber;
                newItemPurchased.itemId = req.body.itemId;
                newItemPurchased.quantity = req.body.quantity;
                newItemPurchased.subtotal = req.body.subtotal;
                itemsPurchasedRepo.save(newItemPurchased).then((newPurchase: ItemPurchased) => {
                    res.status(200).send(newPurchase);
                    console.log(newPurchase);
                });
            });
        router.route("/purchaseditems")
            .get((req: Request, res: Response) => {
                itemsPurchasedRepo.find().then((items: ItemPurchased[]) => {
                    console.log(items)
                    res.status(200).send(items);
                })
            });
        return router;
    }
}