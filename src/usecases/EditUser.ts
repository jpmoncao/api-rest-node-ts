import IUserRepo from "../database/repos/UserRepo.js";
import UserProps from "../database/domain/user.js";
import UseCase from "../types/UseCase.js";

import { UserDuplicateUsernameError, UserMissingDataError } from "../errors/User.js";

export default class EditUser {
    repository: IUserRepo;

    constructor(repository: IUserRepo) {
        this.repository = repository;
    }

    async execute(props: UserProps): Promise<UseCase> {
        let { id, name, username, password } = props;

        if (!id || id == 0)
            throw new UserMissingDataError('O ID do usuário à alterar não foi informado!');

        if (
            (!name || name.trim() == '') &&
            (!username || username.trim() == '') &&
            (!password || password.trim() == '')
        )
            throw new UserMissingDataError('Os dados à alterar não foram passados');

        if (username || username.trim() != '') {
            const usernameAlreadyInUse = await this.repository.findUserByUsername(username);
            console.log(usernameAlreadyInUse)
            if (usernameAlreadyInUse !== undefined && usernameAlreadyInUse.id !== id)
                throw new UserDuplicateUsernameError(`O username '${username}' já está sendo usado por outro usuário!`);
        }

        let userOldData: UserProps = { id, name, username, password };
        Object.entries(userOldData).forEach(([key, value]) => {
            if (value === null || value === undefined) {
                delete userOldData[key];
            }
        });

        await this.repository.updateUser(userOldData);

        const data = await this.repository.findUserById(id);

        return {
            data,
            message: 'Usuário editado com sucesso!'
        };
    }
}