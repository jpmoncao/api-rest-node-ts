import { Knex } from "knex";
import { Request, Response } from "express";

import sendResponse from '../utils/response.js';
import { UseCase } from "../types/UseCase.js";

export async function ListUser(conn: Knex<any, any[]>): Promise<UseCase> {
    try {
        const data = await conn.select().table('user');
        return {
            data,
            message: 'Usuários listados com sucesso!',
        };

    } catch (err) {
        return {
            data: [],
            message: `Erro ao listar usuários: ${err}`,
            error: err
        }
    }
}