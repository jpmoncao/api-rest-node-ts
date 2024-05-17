import { Request, Response } from "express"
import dotenv from 'dotenv'

dotenv.config();

export default function sendResponse(req: Request, res: Response, status: number, data: any[] | undefined, message: string, error?: any): Response {
    if (error) {
        const err = {
            "name": error.name,
            "code": error.code,
        }
        return res.status(status).json({
            error: err,
            message
        })
    }



    return res.status(status).json({
        _self: (process.env.API_ADDRESS ?? '') + req.originalUrl,
        message,
        data,
        page: Number(req.query.page ?? 1),
        limit: Number(req.query.limit ?? 10),
    })
}
