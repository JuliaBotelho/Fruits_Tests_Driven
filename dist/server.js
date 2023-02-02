"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var index_1 = __importDefault(require("./index"));
var port = process.env.PORT || 5000;
index_1["default"].listen(port, function () {
    console.log("Server is up and running on port ".concat(port));
});
