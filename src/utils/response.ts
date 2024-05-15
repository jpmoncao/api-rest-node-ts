import { Request, Response } from "express"

export default function sendResponse(req: Request, message: string, data: Array<any> | JSON, error?: unknown): {} {
    if (error)
        return ({
            "message": message,
            "error": error
        })


    return ({
        "message": message,
        "data": data,
        "page": req?.query?.page ?? 1,
        "limit": req?.query?.limit ?? 10,
    })
}