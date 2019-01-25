"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const games_controller_1 = __importDefault(require("../controllers/games.controller"));
class GamesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // --- GET Routes
        this.router.get('/', games_controller_1.default.list);
        this.router.get('/:id', games_controller_1.default.getOne);
        // --- POST Routes
        this.router.post('/', games_controller_1.default.create);
        // --- PUT Routes
        this.router.put('/:id', games_controller_1.default.update);
        // --- DELETE Routes
        this.router.delete('/:id', games_controller_1.default.delete);
    }
}
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
