export default function sendResponse(req, message, data, error) {
    var _a, _b, _c, _d;
    if (error)
        return ({
            "message": message,
            "error": error
        });
    return ({
        "message": message,
        "data": data,
        "page": (_b = (_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.page) !== null && _b !== void 0 ? _b : 1,
        "limit": (_d = (_c = req === null || req === void 0 ? void 0 : req.query) === null || _c === void 0 ? void 0 : _c.limit) !== null && _d !== void 0 ? _d : 10,
    });
}
