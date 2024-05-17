import { Request, Response } from "express";

import Controller from "./Controller.js";
import IUserRepo from "../database/repos/UserRepo.js";
import UserRepositoryImpl from "../database/repos/implementation/userRepositoryImpl.js";

import ListUser from "../usecases/ListUsers.js";
import ListUserById from "../usecases/ListUserById.js";
import CreateUser from "../usecases/CreateUser.js";

import sendResponse from "../utils/response.js";

export default class UserController extends Controller {
    repository: IUserRepo;

    constructor() {
        super();

        this.repository = new UserRepositoryImpl();
    }

    public async index(req: Request, res: Response): Promise<Response> {
        const listUser = new ListUser(this.repository);

        return await listUser.execute()
            .then(({ data, message }) => sendResponse(req, res, 202, data, message))
            .catch(err => sendResponse(req, res, 500, [], err.message, err))
    }

    public async store(req: Request, res: Response): Promise<Response> {
        const createUser = new CreateUser(this.repository);

        const { id, name, username, password, created_at } = req.body;

        return await createUser.execute({ id, name, username, password, created_at })
            .then(({ data, message }) => sendResponse(req, res, 202, data, message))
            .catch(err => sendResponse(req, res, 500, [], err.message, err))
    }

    public async show(req: Request, res: Response): Promise<Response> {
        const listUserById = new ListUserById(this.repository);

        const id = Number(req.params?.id);

        return await listUserById.execute(id)
            .then(({ data, message }) => sendResponse(req, res, 202, data, message))
            .catch(err => sendResponse(req, res, 500, [], err.message, err))
    }


}