import { Knex } from "knex";
import { Request, Response } from "express";

import sendResponse from '../utils/response.js';

export async function ListUser(req: Request, res: Response, conn: Knex<any, any[]>): Promise<void> {
    try {
        const data = await conn.select().table('user');
        // res.status(202).json(sendResponse(req, 'Usuários listados com sucesso!', data));
    } catch (error) {
        console.error(`Erro ao listar usuários: ${error}`)
        // res.status(500).json(sendResponse(req, `Erro ao listar usuários: ${error}`, [], error));
    }
}