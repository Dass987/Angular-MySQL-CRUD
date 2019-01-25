import { Request, Response } from 'express';
import pool from '../database';

class GamesController {
	
	// --- Get specific game
	public async getOne(request: Request, response: Response): Promise<void> {
		
		const { id } = request.params;
		const game = await pool.query('SELECT * FROM games WHERE id = ?', [id]);

		if (game.length > 0) {
			response.json(game[0]);
		} else {
			response.status(404).json({message: 'The game does not exists'});
		}

	}

	// --- Get all games
	public async list(request: Request, response: Response): Promise<void> {
		const games = await pool.query('SELECT * FROM games');
		response.json(games);
	}

	// --- Create a game
	public async create(request: Request, response: Response): Promise<void>{
		await pool.query('INSERT INTO games SET ?', [request.body]);		
		response.json({message: 'Game saved'});
	}
	
	// --- Update a game
	public async update(request: Request, response: Response): Promise<void> {
		
		const { id } = request.params;
		await pool.query('UPDATE games SET ? WHERE id = ?', [request.body, id]);
		
		response.json({ text: 'Updating a game ' + request.params.id });

	}

	// --- Delete a game
	public async delete(request: Request, response: Response): Promise<void> {
		
		const { id } = request.params;
		await pool.query('DELETE FROM games WHERE id = ?', [id]);

		response.json({ message: 'Game deleted' });
	}

}

const gamesController = new GamesController();

export default gamesController;