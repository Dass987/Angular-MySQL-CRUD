import { Component, OnInit, HostBinding } from '@angular/core';
import { Game } from 'src/app/models/Game';
import { GamesService } from '../../services/games.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

	@HostBinding('class') classes = 'row';

	game: Game = {
		id: 0,
		title: '',
		description: '',
		image: '',
		created_at: new Date()
	};

  constructor(private gamesService: GamesService, private router: Router, private activatedRoute: ActivatedRoute) {
		
	}

  ngOnInit() {
		const params = this.activatedRoute.snapshot.params;
		if (params.id) {
			this.gamesService.getGame(params.id)
				.subscribe(response => {
					console.log(response);
					this.game = response;
					this.edit = true;
				},
				error => console.error(error)
			);
		}
	}
	
	edit: boolean = false;

	saveNewGame() {

		delete this.game.created_at;
		delete this.game.id;

		this.gamesService.saveGame(this.game)
			.subscribe(
				response => {
					console.log(response);
					this.router.navigate(['/games']);
				},
				error => console.error(error)
			);
			
	}
	
	updateGame() {
		
		delete this.game.created_at;

		this.gamesService.updateGame(this.game.id, this.game)
			.subscribe(
				response => {
					console.log(response);
					this.router.navigate(['/games']);
				},
				error => console.error(error)
			);

	}

}
