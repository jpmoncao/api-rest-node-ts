import IUserRepo from "../database/repos/UserRepo.js";
import UseCase from "../types/UseCase.js";

export default class ListUsers {
    repository: IUserRepo;

    constructor(repository: IUserRepo) {
        this.repository = repository;
    }

    async execute(): Promise<UseCase> {
        try {
            const data = await this.repository.findUsers();

            return {
                data,
                message: 'Usuários listados com sucesso!'
            };
        } catch (error) {
            throw error;

            return {
                data: [],
                message: 'Ocorreu um erro no lado do servidor!'
            };
        }

    }
}