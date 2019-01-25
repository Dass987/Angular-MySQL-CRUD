import { Router } from 'express';
import GamesController from '../controllers/games.controller';

class GamesRoutes {
	
	public router: Router = Router();

	constructor() {
		this.config();
	}

	config(): void {
		
		// --- GET Routes
		this.router.get('/', GamesController.list);
		this.router.get('/:id', GamesController.getOne);

		// --- POST Routes
		this.router.post('/', GamesController.create);

		// --- PUT Routes
		this.router.put('/:id', GamesController.update);

		// --- DELETE Routes
		this.router.delete('/:id', GamesController.delete);

	}

}

const gamesRoutes = new GamesRoutes();

export default gamesRoutes.router;