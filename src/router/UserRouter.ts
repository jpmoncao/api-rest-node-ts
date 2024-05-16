import { Request, Response } from "express";
import { APIRouter } from "./Router.js";
import { UserController } from "../controllers/UserController.js";

export class UserRouter extends APIRouter {
    constructor() {
        super();

        this.controller = new UserController();
    }

    protected create(): void {
        this._router.get('/', (req: Request, res: Response) => this.controller.index(req, res));
    }
}
