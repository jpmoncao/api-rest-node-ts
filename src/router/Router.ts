import { Express, IRouter, Request, Response, Router } from "express";

export class APIRouter {
    protected _router: IRouter;
    protected controller: any;

    constructor() {
        this._router = Router();
    }

    protected create(): void {
    }


    public get router(): IRouter {
        this.create();
        return this._router;
    }
}