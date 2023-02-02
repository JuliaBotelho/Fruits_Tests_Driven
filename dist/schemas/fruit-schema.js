"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.fruitSchema = void 0;
var joi_1 = __importDefault(require("joi"));
exports.fruitSchema = joi_1["default"].object({
    name: joi_1["default"].string().required(),
    price: joi_1["default"].number().required()
});
