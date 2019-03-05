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

        router.route("/shopitemsbrands/:id")
            .get((req: Request, res: Response) => {
                console.log("retrieving all shop items with brandId: " + req.params.id);
                shopItemRepo.find({brand: req.params.id}).then((items: ShopItem[]) => {
                    res.status(200).send(items);
                })
            });

        router.route("/newitem")
            .post((req: Request, res: Response) => {
                console.log("adding a new shop item");
                const newItem = new ShopItem();
                newItem.name = req.body.name;
                newItem.price = req.body.price;
                newItem.saleprice = req.body.saleprice;
                newItem.brand = req.body.brandId;
                newItem.categoryId = req.body.categoryId;
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
                        if (item) {
                            res.send(item);
                        } else {
                            res.status(404);
                            res.sendStatus(404);
                        }
                    }
                );
            })
            .put((req: Request, res: Response) => {
                shopItemRepo.findOne(req.params.id).then((foundItem: ShopItem | undefined) => {
                    if (foundItem == undefined) {
                        return;
                    }
                    foundItem.name = req.body.name;
                    foundItem.price = req.body.price;
                    foundItem.saleprice = req.body.saleprice;
                    foundItem.brand = req.body.brandId;
                    foundItem.categoryId = req.body.categoryId;
                    foundItem.image = req.body.image;
                    foundItem.delivery = req.body.delivery;
                    foundItem.quantity = req.body.quantity;
                    foundItem.description = req.body.description;
                    shopItemRepo.save(foundItem).then((updatedItem: ShopItem) => {
                        res.status(200).send(updatedItem);
                    });
                });
            });
        router.route("/deleteitem/:id")
            .delete((req: Request, res: Response) => {
                shopItemRepo.findOne(req.params.id).then((foundItem: ShopItem | undefined) => {
                if (foundItem == undefined) {
                    return;
                }
                shopItemRepo.delete(foundItem).then(x => {
                    res.status(200).send(foundItem);
                    console.log(foundItem);
                });
                });
            });
        return router;
    }
}