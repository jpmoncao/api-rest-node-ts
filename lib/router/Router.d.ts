import { Router } from "express";
import { Controller } from "../controllers/Controller";
export declare class APIRouter {
    protected _router: Router;
    protected controller: Controller;
    constructor();
    protected create(): void;
    get router(): Router;
}
