import createConn from '../services/conn.js';
var Controller = /** @class */ (function () {
    function Controller() {
        this.conn = createConn();
    }
    Object.defineProperty(Controller.prototype, "req", {
        set: function (v) {
            this._req = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Controller.prototype, "res", {
        set: function (v) {
            this._res = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Controller.prototype, "index", {
        get: function () {
            return this._index;
        },
        set: function (v) {
            this._index = v;
        },
        enumerable: false,
        configurable: true
    });
    return Controller;
}());
export { Controller };
