import DefaultController from "./default.controller";

import { NextFunction, Request, Response, Router } from "express";
import multer from "multer";
import Path from "path";

import { getRepository } from "typeorm";
import { Session, User } from "../entity";

export class UserController extends DefaultController {
  protected initializeRoutes(): Router {
    const router = Router();
    const userRepo = getRepository(User);

    router.route("/users")
      .get((req: Request, res: Response) => {
        userRepo.find().then((users: User[]) => {
          res.status(200).send({ users });
        });
      });

    router.route("/users").post((req: Request, res: Response) => {
      const { firstName, lastName, emailAddress, password, role } = req.body;
      const user = new User();
      console.log(req.body);
      user.firstName = firstName;
      user.lastName = lastName;
      user.emailAddress = emailAddress;
      user.password = password;
      user.role = role;
      userRepo.save(user).then(
        (createdUser) => {
          res.status(200).send({ createdUser });
        },
        (reason: any) => {
          res.status(500).send({ reason: "Employee already exists. Choose a different Employee ID." });
        }
      );
    });

    router.route("/users/:id/profile_photo").post(
      this.isAuthenticated(true),
      multer({
        dest: Path.join(__dirname, "..", "public", "profilePhotos")
      }).single(),
      (req: Request, res: Response) => {
        userRepo.findOne(req.params.id).then((user: User | undefined) => {
          if (user) {
            user.profileUrl = Path.join(req.file.path, req.file.filename);
            userRepo.save(user).then((savedUser: User) => {
              res.send({ savedUser });
            });
          }
        });
      }
    );

    router.route("/users/:id").get((req: Request, res: Response) => {
      userRepo.findOne(req.params.id).then(
        (user: User | undefined) => {
          if (user) {
            res.send({ user });
          } else {
            res.status(404).send({reason: "no user with that id exists"});
            return;
          }
        },
        () => {
          res.status(404);
        }
      );
    });

    router.route("/employees")
      .get((req: Request, res: Response) => {
        userRepo.find().then((employees: User[]) => {
          employees = employees.reverse();
          res.status(200).send(employees);
        })
      });

    router.route("/employees/:id")
      .delete((req: Request, res: Response) => {
        userRepo.findOne(req.params.id).then((foundUser: User | undefined) => {
          if (foundUser == undefined) {
            return;
          }
          userRepo.delete(foundUser).then(x => {
            res.status(200).send(foundUser);
            console.log(foundUser);
          });
        });
      });

    router.route("/employees/:id")
      .put((req: Request, res: Response) => {
        userRepo.findOneOrFail(req.params.id).then((foundUser: User) => {
          if (foundUser == undefined) {
            return;
          }
          foundUser.role = (foundUser.role == 0) ? 1 : 0;
          userRepo.save(foundUser).then((updatedUser: User) => {
            res.status(200).send(updatedUser);
            console.log(updatedUser);
          });
        });
      })
    return router;
  }

  protected isAuthenticated(checkSameUser: boolean = false) {
    return (req: Request, res: Response, next: NextFunction) => {
      const token: string | undefined = req.get("token");
      if (token) {
        const sessionRepo = getRepository(Session);
        sessionRepo.findOne(token).then((foundSession: Session | undefined) => {
          if (
            foundSession &&
            ((checkSameUser && foundSession.user.id === req.params.id) ||
              !checkSameUser) &&
            foundSession.expiresAt.getTime() > new Date().getTime()
          ) {
            next();
          } else {
            res.status(403);
          }
        });
      } else {
        res.status(401);
      }
    };
  }
}

export default UserController;