import { Knex } from "knex";
import IUserRepo from "../UserRepo.js";
import createConn from "../../conn.js";
import UserProps from "../../domain/user.js";

export default class UserRepositoryImpl implements IUserRepo {
    public conn: Knex<any, any[]>;

    constructor() {
        this.conn = createConn();
    }

    public async findUsers(): Promise<UserProps[] | undefined> {
        return await this.conn
            .select()
            .from('user');
    }

    public async findUserById(userId: number): Promise<UserProps | undefined> {
        const user: UserProps[] = await this.conn
            .select('id', 'name', 'username')
            .from('user')
            .where('id', userId);
        return user[0];
    }

    public async createUser(props: UserProps): Promise<UserProps | undefined> {
        const userId: UserProps = await this.conn
            .insert(props)
            .into('user');

        return userId;
    }
}