import { Request, Response } from "express";
import dotenv from 'dotenv';

import Controller from "./Controller.js";
import UserProps from "../database/domain/user.js";
import IUserRepo from "../database/repos/UserRepo.js";
import UserRepositoryImpl from "../database/repos/implementation/UserRepositoryImpl.js";

import ListUser from "../usecases/ListUsers.js";
import ListUserById from "../usecases/ListUserById.js";
import CreateUser from "../usecases/CreateUser.js";
import EditUser from "../usecases/EditUser.js";

import sendResponse from "../utils/response.js";

dotenv.config();

export default class UserController extends Controller {
    repository: IUserRepo;

    constructor() {
        super();

        this.repository = new UserRepositoryImpl();
    }

    public async index(req: Request, res: Response): Promise<Response> {
        const listUser = new ListUser(this.repository);

        return await listUser.execute()
            .then(({ data, message }) => {
                const userWithHateoas = data.map((user: UserProps) => {
                    return {
                        ...user, links: [
                            { rel: 'info', href: process.env.API_ADDRESS + '/user/' + user.id, method: 'GET' },
                            { rel: 'edit', href: process.env.API_ADDRESS + '/user/edit/' + user.id, method: 'PUT' },
                            { rel: 'delete', href: process.env.API_ADDRESS + '/user/delete/' + user.id, method: 'DELETE' },
                        ]
                    }
                })

                return sendResponse(req, res, 202, userWithHateoas, message)
            })
            .catch(err => sendResponse(req, res, 500, [], err.message, err))
    }

    public async store(req: Request, res: Response): Promise<Response> {
        const createUser = new CreateUser(this.repository);

        const { id, name, username, password, created_at } = req.body;

        return await createUser.execute({ id, name, username, password, created_at })
            .then(({ data, message }) => {
                const userWithHateoas = {
                    ...data, links: [
                        { rel: 'info', href: process.env.API_ADDRESS + '/user/' + data.id, method: 'GET' },
                        { rel: 'edit', href: process.env.API_ADDRESS + '/user/edit/' + data.id, method: 'PUT' },
                        { rel: 'delete', href: process.env.API_ADDRESS + '/user/delete/' + data.id, method: 'DELETE' },
                    ]
                }

                return sendResponse(req, res, 202, userWithHateoas, message)
            })
            .catch(err => sendResponse(req, res, 500, [], err.message, err))
    }

    public async edit(req: Request, res: Response): Promise<Response> {
        const editUser = new EditUser(this.repository);

        const id = Number(req.params.id);
        const { name, username, password } = req.body;

        return await editUser.execute({ id, name, username, password })
            .then(({ data, message }) => {
                const userWithHateoas = {
                    ...data, links: [
                        { rel: 'info', href: process.env.API_ADDRESS + '/user/' + data.id, method: 'GET' },
                        { rel: 'edit', href: process.env.API_ADDRESS + '/user/edit/' + data.id, method: 'PUT' },
                        { rel: 'delete', href: process.env.API_ADDRESS + '/user/delete/' + data.id, method: 'DELETE' },
                    ]
                }

                return sendResponse(req, res, 202, userWithHateoas, message)
            })
            .catch(err => sendResponse(req, res, 500, [], err.message, err))
    }

    // public async destroy(req: Request, res: Response): Promise<Response> {
    //     const createUser = new CreateUser(this.repository);

    //     const { id, name, username, password, created_at } = req.body;

    //     return await createUser.execute({ id, name, username, password, created_at })
    //         .then(({ data, message }) => sendResponse(req, res, 202, data, message))
    //         .catch(err => sendResponse(req, res, 500, [], err.message, err))
    // }

    public async show(req: Request, res: Response): Promise<Response> {
        const listUserById = new ListUserById(this.repository);

        const id = Number(req.params?.id);

        return await listUserById.execute(id)
            .then(({ data, message }) => {
                const userWithHateoas = {
                    ...data, links: [
                        { rel: 'info', href: process.env.API_ADDRESS + '/user/' + data.id, method: 'GET' },
                        { rel: 'edit', href: process.env.API_ADDRESS + '/user/edit/' + data.id, method: 'PUT' },
                        { rel: 'delete', href: process.env.API_ADDRESS + '/user/delete/' + data.id, method: 'DELETE' },
                    ]
                }

                return sendResponse(req, res, 202, userWithHateoas, message)
            })
            .catch(err => sendResponse(req, res, 500, [], err.message, err))
    }


}