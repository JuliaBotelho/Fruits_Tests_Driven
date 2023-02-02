"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.createFruit = exports.getSpecificFruit = exports.getFruits = void 0;
var http_status_1 = __importDefault(require("http-status"));
var fruits_service_1 = __importDefault(require("../services/fruits-service"));
function getFruits(req, res) {
    var fruits = fruits_service_1["default"].getFruits();
    res.send(fruits);
}
exports.getFruits = getFruits;
function getSpecificFruit(req, res) {
    var id = parseInt(req.params.id);
    try {
        var fruit = fruits_service_1["default"].getSpecificFruit(id);
        res.send(fruit);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(http_status_1["default"].NOT_FOUND);
    }
}
exports.getSpecificFruit = getSpecificFruit;
function createFruit(req, res) {
    var fruit = req.body;
    try {
        fruits_service_1["default"].createFruit(fruit);
        res.sendStatus(http_status_1["default"].CREATED);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(http_status_1["default"].CONFLICT);
    }
}
exports.createFruit = createFruit;
