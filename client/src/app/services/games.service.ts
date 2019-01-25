import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
		return this.http.get(`${this._API_URI}/game/${_id}`);
	}

	saveGame(game) {
		return this.http.post(`${this._API_URI}/game`, game);
	}

}
