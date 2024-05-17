import { UserProps } from "../domain/user.js";
import { Repo } from "./Repo.js";

export default interface IUserRepo extends Repo {
    findUser: () => Promise<UserProps[] | undefined>;
}