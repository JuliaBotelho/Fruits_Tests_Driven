"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.validateSchemaMiddleware = void 0;
var http_status_1 = __importDefault(require("http-status"));
function validateSchemaMiddleware(schema) {
    return function (req, res, next) {
        var validation = schema.validate(req.body);
        if (validation.error) {
            return res.status(http_status_1["default"].UNPROCESSABLE_ENTITY).send({ error: validation.error.message });
        }
        next();
    };
}
exports.validateSchemaMiddleware = validateSchemaMiddleware;
