import createConn from '../services/conn.js';
var Controller = /** @class */ (function () {
    function Controller() {
        this.conn = createConn();
    }
    Controller.prototype.index = function (req, res) { };
    ;
    return Controller;
}());
export { Controller };
