import { Router } from 'express';

class GamesRoutes {
	
	public router: Router = Router();

	constructor() {
		this.config();
	}

	config(): void {
		
		this.router.get('/', (request, response) => {
			response.send('Games');
		});

	}

}

const gamesRoutes = new GamesRoutes();

export default gamesRoutes.router;