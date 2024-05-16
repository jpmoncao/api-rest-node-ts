export interface Res {
    page?: number | null;
    limit?: number | null;
    data: any[];
    message: string;
    error?: unknown;
}