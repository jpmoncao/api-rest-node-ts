export default function sendResponse(page, limit, data, message, error) {
    if (error)
        return ({
            message: message,
            data: [],
            error: error
        });
    return ({
        message: message,
        data: data,
        page: page !== null && page !== void 0 ? page : 1,
        limit: limit !== null && limit !== void 0 ? limit : 10,
    });
}
