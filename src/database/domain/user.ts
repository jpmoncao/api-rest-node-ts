export default interface UserProps {
    id?: number | null;
    name: string;
    username: string;
    password: string;
    created_at?: string | null;
    [key: string]: any;
}
