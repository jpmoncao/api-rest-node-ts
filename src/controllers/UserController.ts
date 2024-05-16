import { Request, Response } from "express";
import { Res } from "../types/Res.js";
import { UseCase } from "../types/UseCase.js";
import { ListUser } from "../usecases/ListUsers.js";
import sendResponse from "../utils/response.js";
import { Controller } from "./Controller.js";

export class UserController extends Controller {
    constructor() {
        super();
    }

    public async index(req: Request, res: Response): Promise<Response<Res>> {
        const page = Number(req.query.page);
        const limit = Number(req.query.limit);


        try {
            const { data, message, error } = await ListUser(this.conn);
            const json = sendResponse(page, limit, data, message, error);

            if (error) {
                throw new Error(String(error));
            }

            return res.status(202).json(json);
        }
        catch (error) {
            const json = sendResponse(page, limit, [], 'Não foi possível listar os usuários!', error);
            return res.status(500).json(json);
        }
    }


}