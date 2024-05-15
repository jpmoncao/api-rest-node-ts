import { Knex } from "knex";
import { Request, Response } from "express";
export declare class Controller {
    protected conn: Knex<any, any[]>;
    protected _req: Request;
    protected _res: Response;
    protected _index: Promise<void>;
    constructor();
    set req(v: Request);
    set res(v: Response);
    get index(): Promise<void>;
    set index(v: Promise<void>);
}
