import { Knex } from "knex";
import { Request, Response } from "express";

import createConn from '../services/conn.js';

export class Controller {
    protected conn: Knex<any, any[]>;

    protected _req: Request;
    protected _res: Response;

    protected _index: Promise<void>

    constructor() {
        this.conn = createConn();
    }


    public set req(v: Request) {
        this._req = v;
    }

    public set res(v: Response) {
        this._res = v;
    }

    public get index(): Promise<void> {
        return this._index;
    }


    public set index(v: Promise<void>) {
        this._index = v;
    }

}