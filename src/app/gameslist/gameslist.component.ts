import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-gameslist',
  templateUrl: './gameslist.component.html',
  styleUrls: ['./gameslist.component.css']
})
export class GameslistComponent implements OnInit {
  constructor(private gameService:GamesService){}

  games = [
    { id: 1, state: "open" },
    { id: 2, state: "open" },
    { id: 3, state: "started" }
  ];

  ngOnInit() {
  }

  handleClick(gameId) {
    alert("Opening game " + gameId);
  }

}
