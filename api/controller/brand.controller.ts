import DefaultController from "./default.controller";

import { NextFunction, Request, Response, Router } from "express";
import express from "express";

import { Brand, ShopItem } from "../entity";

import { getRepository } from "typeorm";

export class BrandController extends DefaultController {
    protected initializeRoutes(): express.Router {
        const router = express.Router();
        const brandRepo = getRepository(Brand);
        router.route("/brands")
            .get((req: Request, res: Response) => {
                console.log("retrieving all brands");
                brandRepo.find().then((brands: Brand[]) => {
                    res.status(200).send(brands);
                })
            });


        router.route("/newBrand")
            .post((req: Request, res: Response) => {
                console.log("adding a new brand");
                const newBrand = new Brand();
                newBrand.name = req.body.name;
                newBrand.id = req.body.id;
                brandRepo.save(newBrand).then((savedBrand: Brand) => {
                    console.log(savedBrand);
                    res.status(200).send(savedBrand);
                });
            });
            
        router.route("/brands/:id")
            .get((req: Request, res: Response) => {
                brandRepo.findOne(req.params.id).then(
                    (brand: Brand | undefined) => {
                        if(brand){
                            console.log("brand of id: " + req.params.id + "found")
                            res.send(brand);
                        }
                        else{
                            console.log("brand not found");
                            brand = new Brand();
                            brand.id = -1;
                            res.send(brand);
                            res.status(404);
                        }
                    });
            });

        
        return router;
    }
}