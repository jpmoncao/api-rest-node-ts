import { Knex } from "knex";
import IUserRepo from "../UserRepo.js";
import createConn from "../../conn.js";
import { UserProps } from "../../domain/user.js";

export class UserRepositoryImpl implements IUserRepo {
    public conn: Knex<any, any[]>;

    constructor() {
        this.conn = createConn();
    }

    public async findUser(): Promise<UserProps[] | undefined> {
        return await this.conn.select().table('user');
    };
}