import { Request, Response } from "express"
import dotenv from 'dotenv'

dotenv.config();

export default function sendResponse(req: Request, res: Response, status: number, data: any[] | undefined, message: string, error?: unknown): Response {
    if (error)
        return res.status(status).json({
            message,
            data: [],
            error
        })

    

    return res.status(status).json({
        _self: (process.env.API_ADDRESS ?? '') + req.originalUrl,
        route: req.route,
        message,
        data,
        page: Number(req.query.page ?? 1),
        limit: Number(req.query.limit ?? 10),
    })
}
