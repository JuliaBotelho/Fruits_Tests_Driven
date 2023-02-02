"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var fruits_1 = __importDefault(require("../data/fruits"));
function getFruits() {
    return fruits_1["default"];
}
function getSpecificFruit(id) {
    return fruits_1["default"].find(function (fruit) {
        return fruit.id === id;
    });
}
function getSpecificFruitByName(name) {
    return fruits_1["default"].find(function (fruit) {
        return fruit.name === name;
    });
}
function insertFruit(fruit) {
    var id = fruits_1["default"].length + 1;
    fruits_1["default"].push(__assign(__assign({}, fruit), { id: id })); // id único
}
var fruitsRepository = {
    getFruits: getFruits,
    getSpecificFruit: getSpecificFruit,
    getSpecificFruitByName: getSpecificFruitByName,
    insertFruit: insertFruit
};
exports["default"] = fruitsRepository;
