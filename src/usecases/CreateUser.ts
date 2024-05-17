import IUserRepo from "../database/repos/UserRepo.js";
import UserProps from "../database/domain/user.js";
import UseCase from "../types/UseCase.js";

export default class CreateUser {
    repository: IUserRepo;

    constructor(repository: IUserRepo) {
        this.repository = repository;
    }

    async execute(props: UserProps): Promise<UseCase> {
        try {
            let { id, name, username, password, created_at } = props;

            const userId = await this.repository.createUser({ id, name, username, password, created_at });

            const data = await this.repository.findUserById(Number(userId));

            return {
                data,
                message: 'Usuários criado com sucesso!'
            };
        } catch (error) {
            throw error;
        }

    }
}