import { Knex } from "knex";
import { Request, Response } from "express";
export declare class Controller {
    protected conn: Knex<any, any[]>;
    protected _req: Request;
    protected _res: Response;
    index(req: Request, res: Response): void;
    constructor();
}
