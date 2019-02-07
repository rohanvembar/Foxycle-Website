import DefaultController from "./default.controller";
import express from "express";
import { NextFunction, Request, Response, Router } from "express";
import { getRepository } from "typeorm";
import { Session, ToDo } from "../entity";

export class TodoController extends DefaultController {

    protected initializeRoutes(): express.Router {
        const router = Router();

        router
            .route("/todos")
            .post((req: Request, res: Response) => {
                const token = req.get("token");
                const sessionRepo = getRepository(Session);
                const todoRepo = getRepository(ToDo);
                const todo = new ToDo();
                sessionRepo.findOne(token).then((foundSession: Session | undefined) => {
                    const user = foundSession!.user;
                    todo.dueDate = req.body.dueDate;
                    todo.title = req.body.title;
                    todo.user = user;
                    todoRepo.save(todo).then((savedTodo : ToDo) => {
                        res.status(200).send({todo});
                    });
                });
            })
            .get((req: Request, res: Response) => {
                const todoRepo = getRepository(ToDo);
                todoRepo.find().then((todos: ToDo[]) => {
                  res.status(200).send({ todos });
                });
              });

        return router;
    }
}