import { Request, Response } from "express"
import { Res } from "../types/Res"

export default function sendResponse(page: number | null, limit: number | null, data: any[], message: string, error?: unknown): Res {
    if (error)
        return ({
            message,
            data: [],
            error
        })


    return ({
        message,
        data,
        page: page ?? 1,
        limit: limit ?? 10,
    })
}