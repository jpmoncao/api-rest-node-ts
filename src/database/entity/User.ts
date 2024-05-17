import UserProps from "../domain/user.js";

export class User implements UserProps {
    id?: number | null;
    name: string;
    username: string;
    password: string;
    created_at?: string | null;

    constructor(props: UserProps) {
        this.id = props.id;
        this.name = props.name;
        this.username = props.username;
        this.password = props.password;
        this.created_at = props.created_at;
    }
}