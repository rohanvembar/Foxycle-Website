import cors from "cors";
import express from "express";
import { BrandController, LoginController, UserController, AnnouncementController, ShopItemController, OrderManagementController, ContactController, ServiceController, ItemPurchasedController, CategoryController} from "./controller";

import { DBConnection } from "./connection";
import { OrderManagement, ItemPurchased } from "./entity";

export class Server {
  private myApp: Promise<express.Application>;
  constructor() {
    this.myApp = this.buildServer();
  }
  public getMyApp(): Promise<express.Application> {
    return this.myApp;
  }
  protected buildServer(): Promise<express.Application> {
    return DBConnection.getConnection().then(() => {
      const app: express.Application = express();

      app.use(cors());
      app.use(express.json());

      app.use("/", new UserController().router);
      app.use("/", new LoginController().router);
      app.use("/", new AnnouncementController().router);
      app.use("/", new ShopItemController().router);
      app.use("/", new ContactController().router);
      app.use("/", new ServiceController().router);
      app.use("/", new OrderManagementController().router);
      app.use("/", new ItemPurchasedController().router);
      app.use("/", new CategoryController().router);
      app.use("/", new BrandController().router);

      return app;
    });
  }

}

export default Server;
