import IUserRepo from "../database/repos/UserRepo.js";
import UserProps from "../database/domain/user.js";
import UseCase from "../types/UseCase.js";

import { UserDuplicateUsernameError, UserMissingDataError } from "../errors/User.js";

export default class CreateUser {
    repository: IUserRepo;

    constructor(repository: IUserRepo) {
        this.repository = repository;
    }

    async execute(props: UserProps): Promise<UseCase> {
        let { name, username, password } = props;

        if (!name || name.trim() == '' ||
            !username || username.trim() == '' ||
            !password || password.trim() == '')
            throw new UserMissingDataError(`Há dados obrigatórios faltando!`);

        const usernameAlreadyExits = await this.repository.findUserByUsername(username);
        if (usernameAlreadyExits !== undefined)
            throw new UserDuplicateUsernameError(`O username '${username}' já está sendo usado por outro usuário!`);

        const userId = await this.repository.createUser({ name, username, password });
        const data = await this.repository.findUserById(Number(userId));

        return {
            data,
            message: 'Usuários criado com sucesso!'
        };
    }
}