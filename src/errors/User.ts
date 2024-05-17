export class UserNotFoundError extends Error {
    name: string;
    message: string;
    code: string;

    constructor(name: string, message: string) {
        super(message);

        this.name = name;
        this.code = 'USER_NOT_FOUND'
    }
}
