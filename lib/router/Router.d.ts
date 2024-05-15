import { IRouter } from "express";
export declare class APIRouter {
    protected _router: IRouter;
    protected controller: any;
    constructor();
    protected create(): void;
    get router(): IRouter;
}
