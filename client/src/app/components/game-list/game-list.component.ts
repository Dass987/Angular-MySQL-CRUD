import { Component, OnInit, HostBinding } from '@angular/core';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

	@HostBinding('class') classes = 'row';

	games: any = [];

  constructor(private gamesService: GamesService) {

	}

  ngOnInit() {
		this.getGames();
	}

	deleteGame(id: string) {
		this.gamesService.deleteGame(id)
			.subscribe(
				response => {
					console.log(response);
					this.getGames();
				},
				error => console.log(error)
			);
	}

	getGames() {
		this.gamesService.getGames().subscribe(
			response => {
				this.games = response;
			},
			error => console.log(error)
		);
	}

}
