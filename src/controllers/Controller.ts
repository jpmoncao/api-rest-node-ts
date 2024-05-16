import { Knex } from "knex";
import { Request, Response } from "express";

import { UseCase } from "../types/UseCase.js";
import createConn from '../services/conn.js';
import { Res } from "../types/Res.js";

export class Controller {
    protected conn: Knex<any, any[]>;

    protected _req: Request;
    protected _res: Response;

    public index(req: Request, res: Response): void { };

    constructor() {
        this.conn = createConn();
    }
}