import { Knex } from "knex";
import { Request, Response } from "express";
export declare function ListUser(req: Request, res: Response, conn: Knex<any, any[]>): Promise<void>;
