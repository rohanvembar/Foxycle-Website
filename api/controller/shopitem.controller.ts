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
        router.route("/shopitem/:id")
            .get((req: Request, res: Response) => {
                shopItemRepo.findOne(req.params.id).then(
                    (item: ShopItem | undefined) => {
                        res.send(item);
                    },
                    () => {
                        res.status(404);
                    }
                );
            });
        router.route("/cart")
            .get((req: Request, res: Response) => {
                const ids = req.get("cartItems");
                console.log("cart item ids: " + ids)
                if (!ids) {
                    res.status(404);
                    return;
                }
                var items: ShopItem[] = [];
                const idList = ids.split(",");
                const needed: number = idList.length;
                var received = 0;
                var failed = 0;
                for (let i in idList) {
                    console.log("looking for id #" + idList[i])
                    shopItemRepo.findOne(idList[i]).then((item: ShopItem | undefined) => {
                        if (!item) {
                            failed ++;
                            res.status(404);
                            return;
                        }
                        items.push(item);
                        received ++;
                        if(failed + received === needed) {
                            console.log(items)
                            res.send(items);
                        }
                    });
                }
            });
        return router;
    }
}