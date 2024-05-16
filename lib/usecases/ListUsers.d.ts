import { Knex } from "knex";
import { UseCase } from "../types/UseCase.js";
export declare function ListUser(conn: Knex<any, any[]>): Promise<UseCase>;
