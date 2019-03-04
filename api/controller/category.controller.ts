import DefaultController from "./default.controller";

import { NextFunction, Request, Response, Router } from "express";
import express from "express";

import { Category } from "../entity";

import { getRepository } from "typeorm";

export class CategoryController extends DefaultController {
    protected initializeRoutes(): express.Router {
        const router = express.Router();
        const itemCategoryRepo = getRepository(Category);
        router.route("/itemscategory")
            .get((req: Request, res: Response) => {
                console.log("retrieving all item categories");
                itemCategoryRepo.find().then((categories: Category[]) => {
                    res.status(200).send(categories);
                })
            });
        router.route("/itemscategory/:id")
            .get((req: Request, res: Response) => {
                var id = req.params.id;
                console.log("retrieving item categories with id of " + id);
                itemCategoryRepo.find(id).then((categories: Category[]) => {
                    if (categories == undefined) {
                        return;
                    }
                    console.log(categories)
                    res.status(200).send(categories);
                })
            });
        router.route("/newitemcategory")
            .post((req: Request, res: Response) => {
                console.log("adding a new item category");
                const newItemCategory = new Category();
                newItemCategory.categoryId = req.body.categoryId;
                newItemCategory.category = req.body.category;
                itemCategoryRepo.save(newItemCategory).then((savedCategory: Category) => {
                    res.status(200).send(savedCategory);
                    console.log(savedCategory);
                });
            });
        return router;
    }
}