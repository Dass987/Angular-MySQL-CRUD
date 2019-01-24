"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class GamesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (request, response) => {
            response.send('Games');
        });
    }
}
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
