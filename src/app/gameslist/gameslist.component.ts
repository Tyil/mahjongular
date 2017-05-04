import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gameslist',
  templateUrl: './gameslist.component.html',
  styleUrls: ['./gameslist.component.css']
})
export class GameslistComponent implements OnInit {
  games = [
    { id: 1, state: "open" },
    { id: 2, state: "open" },
    { id: 3, state: "started" }
  ];

  constructor() { }

  ngOnInit() {
  }

  handleClick(gameId) {
    alert("Opening game " + gameId);
  }

}
