import DefaultController from "./default.controller";

import { NextFunction, Request, Response, Router } from "express";
import express from "express";

import { OrderManagement, ShopItem } from "../entity";

import { getRepository } from "typeorm";

export class OrderManagementController extends DefaultController {
    protected initializeRoutes(): express.Router {
        const router = express.Router();
        const orderRepo = getRepository(OrderManagement);
        router.route("/orders")
            .get((req: Request, res: Response) => {
                console.log("retrieving all orders");
                orderRepo.find().then((orders: OrderManagement[]) => {
                    res.status(200).send(orders);
                })
            });
        router.route("/neworder")
            .post((req: Request, res: Response) => {
                console.log("adding a new order");
                const newOrder = new OrderManagement();
                newOrder.orderNumber = req.body.orderNumber;
                newOrder.status = req.body.status;
                newOrder.dateOrdered = req.body.date;
                newOrder.mailingAddress = req.body.address;
                orderRepo.save(newOrder).then((savedOrder: OrderManagement) => {
                    res.status(200).send(savedOrder);
                    console.log(savedOrder);
                });
            });
        router.route("/order/:id")
            .get((req: Request, res: Response) => {
                orderRepo.findOneOrFail(req.params.id).then(
                    (order: OrderManagement | undefined) => {
                        if (order) {
                        res.send(order);
                        } else {
                            res.status(404);
                        }
                    });
            });
        return router;
    }
}