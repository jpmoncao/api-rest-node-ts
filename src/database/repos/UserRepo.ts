import UserProps from "../domain/user.js";
import { Repo } from "./Repo.js";

export default interface IUserRepo extends Repo {
    findUsers: () => Promise<UserProps[] | undefined>;
    findUserById: (userId: number) => Promise<UserProps | undefined>;
    findUserByUsername: (username: string) => Promise<UserProps | undefined>;
    createUser: (props: UserProps) => Promise<UserProps | undefined>;
    updateUser: (props: UserProps) => Promise<UserProps | undefined>;
}