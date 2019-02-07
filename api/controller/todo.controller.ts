import DefaultController from "./default.controller";

import { NextFunction, Request, Response, Router } from "express";
import express from "express";

import { Session, ToDo } from "../entity";

import { getRepository } from "typeorm";

export class ToDoController extends DefaultController {
  protected initializeRoutes(): express.Router {
    const router = express.Router();

    router.route("/todos")
    .post((req: Request, res: Response) => {
      const token = req.get("token");
      const sessionRepo = getRepository(Session);
      const todoRepo = getRepository(ToDo);
      const todo = new ToDo();
      sessionRepo.findOne(token).then((foundSession: Session | undefined) => {
        const user = foundSession!.user;
        todo.dueDate = req.body.dueDate;
        todo.complete = false;
        todo.title = req.body.title;
        todo.user = user;
        todoRepo.save(todo).then((savedTodo: ToDo) => {
          res.status(200).send(savedTodo);
          console.log(savedTodo);
        });
      });
    })
    .get((req: Request, res: Response) => {
      console.log("retrieving all todos");
      const todoRepo = getRepository(ToDo);
      todoRepo.find().then((todos: ToDo[]) => {
        res.status(200).send( todos );
      })
    });
    router.route("/todos/:id")
    .put((req: Request, res: Response) => {
      const todoRepo = getRepository(ToDo);
      todoRepo.findOne(req.params.id).then((foundToDo: ToDo | undefined) => {
        if (foundToDo == undefined) {
          return;
        }
        foundToDo.complete = true;
        todoRepo.save(foundToDo).then((savedTodo: ToDo) => {
          res.status(200).send(foundToDo);
          console.log(savedTodo);
        });          
      });
    })
    .delete((req: Request, res: Response) => {
      const todoRepo = getRepository(ToDo);
      todoRepo.findOne(req.params.id).then((foundToDo: ToDo | undefined) => {
        if (foundToDo == undefined) {
          return;
        }
        todoRepo.delete(foundToDo).then(x => {
          res.status(200).send(foundToDo);
          console.log(foundToDo);
        });          
      });        
    });

    return router;
  }
}
