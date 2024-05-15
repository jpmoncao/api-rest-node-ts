import { Router } from "express";
var APIRouter = /** @class */ (function () {
    function APIRouter() {
        this._router = Router();
    }
    APIRouter.prototype.create = function () {
    };
    Object.defineProperty(APIRouter.prototype, "router", {
        get: function () {
            this.create();
            return this._router;
        },
        enumerable: false,
        configurable: true
    });
    return APIRouter;
}());
export { APIRouter };
