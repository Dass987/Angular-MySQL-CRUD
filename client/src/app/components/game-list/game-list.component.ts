import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

	games: any = [];

  constructor(private gamesService: GamesService) {

	}

  ngOnInit() {
		this.gamesService.getGames().subscribe(
			response => {
				this.games = response;
			},
			error => console.log(error)
		);
	}

}
