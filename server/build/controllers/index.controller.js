"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(request, response) {
        response.json({ text: 'Api is /api/games' });
    }
}
const indexController = new IndexController();
exports.default = indexController;
