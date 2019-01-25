import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/Game';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GamesService {

	_API_URI = 'http://localhost:3000/api';

	constructor(private http: HttpClient) { }

	getGames() {
		return this.http.get(`${this._API_URI}/games`);
	}

	getGame(_id: string) {
		return this.http.get(`${this._API_URI}/games/${_id}`);
	}

	saveGame(game: Game) {
		return this.http.post(`${this._API_URI}/games`, game);
	}

	updateGame(_id: string, updatedGame: Game) {
		return this.http.put(`${this._API_URI}/games/${_id}`, updatedGame);
	}

	deleteGame(_id: string): Observable<Game> {
		return this.http.delete(`${this._API_URI}/games/${_id}`);
	}

}
