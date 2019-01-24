import { Request, Response } from 'express';

class IndexController {
	
	public index (request: Request, response: Response) {
		response.json({text: 'Api is /api/games'});
	}

}

const indexController = new IndexController();

export default indexController;