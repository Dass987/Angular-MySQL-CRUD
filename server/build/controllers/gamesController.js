"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GamesController {
    index(request, response) {
        response.send('Games');
    }
}
const gamesController = new GamesController();
exports.default = gamesController;
