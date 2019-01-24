import { Request, Response } from 'express';

class GamesController {
	
	public index (request: Request, response: Response) {
		response.send('Games');
	}

}

const gamesController = new GamesController();

export default gamesController;