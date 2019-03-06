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

        router.route("/uniqueitemcategories")
            .get((req: Request, res: Response) => {
                console.log("retrieving all unique item category names");
                itemCategoryRepo.find().then((categories: Category[]) => {
                    var unique_names: string[] = [];
                    var unique_categories: Category[] = [];
                    for(var i in categories){
                        var ind = unique_names.indexOf(categories[i].category);
                        console.log(ind);
                        if(ind == -1){
                            unique_names.push(categories[i].category);
                            unique_categories.push(categories[i]);
                        }
                    }
                    console.log("unique categories: " + unique_names);
                    res.status(200).send(unique_categories);
                })
            });
        router.route("/itemscategory/:id")
            .get((req: Request, res: Response) => {
                var id = req.params.id;
                console.log("retrieving item categories with id of " + id);
                itemCategoryRepo.find(id).then((categories: Category[]) => {
                    var refined_categories: Category[] = [];
                    for (var i in categories) {
                        if (categories[i].categoryId == id) {
                            refined_categories.push(categories[i]);
                        }
                    }
                    console.log(refined_categories)
                    res.status(200).send(refined_categories);
                })
            });
        router.route("/deletecategory/:id")
            .delete((req: Request, res: Response) => {
                var id = req.params.id;
                console.log("deleting all entries for item with category id of " + id);
                itemCategoryRepo.find(id).then((categories: Category[]) => {
                    for (var i in categories) {
                        if (categories[i].categoryId == id) {
                            itemCategoryRepo.delete(categories[i]).then(x => {
                                res.status(200).send(categories[i]);
                                console.log(categories[i]);
                              });
                        }
                    }
                })
            })
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