"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Controller {
    index(request, response) {
        response.send('Hello');
    }
}
const indexController = new Controller();
exports.default = indexController;
