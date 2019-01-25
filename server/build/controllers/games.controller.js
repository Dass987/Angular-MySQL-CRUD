"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class GamesController {
    // --- Get specific game
    getOne(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const game = yield database_1.default.query('SELECT * FROM games WHERE id = ?', [id]);
            if (game.length > 0) {
                response.json(game[0]);
            }
            else {
                response.status(404).json({ message: 'The game does not exists' });
            }
        });
    }
    // --- Get all games
    list(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const games = yield database_1.default.query('SELECT * FROM games');
            response.json(games);
        });
    }
    // --- Create a game
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO games SET ?', [request.body]);
            response.json({ message: 'Game saved' });
        });
    }
    // --- Update a game
    update(request, response) {
        response.json({ text: 'Updating a game ' + request.params.id });
    }
    // --- Delete a game
    delete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            yield database_1.default.query('DELETE FROM games WHERE id = ?', [id]);
            response.json({ message: 'Game deleted' });
        });
    }
}
const gamesController = new GamesController();
exports.default = gamesController;
