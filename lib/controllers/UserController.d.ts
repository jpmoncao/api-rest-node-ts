import { Request, Response } from "express";
import { Res } from "../types/Res.js";
import { Controller } from "./Controller.js";
export declare class UserController extends Controller {
    constructor();
    index(req: Request, res: Response): Promise<Response<Res>>;
}
