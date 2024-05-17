import { Request, Response } from "express";
import sendResponse from "../utils/response.js";
import ListUser from "../usecases/ListUsers.js";
import { Controller } from "./Controller.js";
import IUserRepo from "../database/repos/UserRepo.js";
import { UserRepositoryImpl } from "../database/repos/implementation/userRepositoryImpl.js";

export class UserController extends Controller {
    repository: IUserRepo;

    constructor() {
        super();

        this.repository = new UserRepositoryImpl();
    }

    public async index(req: Request, res: Response): Promise<Response> {
        const listUser = new ListUser(this.repository);

        return await listUser.execute()
            .then(({ data, message }) => sendResponse(req, res, 202, data, message))
            .catch(error => sendResponse(req, res, 500, [], error.message, error))
    }


}