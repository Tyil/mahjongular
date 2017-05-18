import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Game } from '../models/game';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class GamesService {
  constructor(private http: Http) {}

  getGames() : Promise<Game[]> {
    return this.http.get("http://mahjongmayhem.herokuapp.com/games?pageSize=100")
    .toPromise()
    .then(result => result.json().data as Game[])
    .catch();
  }

  getSingleGame(id: number) : Promise<Game> {
    return this.http.get("http://mahjongmayhem.herokuapp.com/games/" + id)
    .toPromise()
    .then(result => result.json().data as Game)
    .catch();
  }

  makeGame() : boolean {
    return true;
  }
}
