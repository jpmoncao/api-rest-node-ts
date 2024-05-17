import { Knex } from "knex";
import { Request, Response, response } from "express";
import createConn from '../database/conn.js';
import { Repo } from "../database/repos/Repo.js";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";

interface IController {
    index?: (req: Request, res: Response) => Promise<Response>;
    conn: Knex<any, any[]>;

    _req: Request;
    _res: Response;

    repository: Repo;
}

export class Controller implements IController {
    conn: Knex<any, any[]>;

    _req: Request;
    _res: Response;

    repository: Repo;

    constructor() {
        this.conn = createConn();
    }

    public async index(req: Request, res: Response): Promise<Response> {
        return response;
    }
}