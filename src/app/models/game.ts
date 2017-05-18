export class Game {
  "_id": string;
  "id": string;
  "gameTemplate": {
    "id": string,
    "_id": string
  }
  "createdOn": Date;
  "startedOn": Date;
  "endedOn": Date;
  "createdBy": {
    "_id": string,
    "name": string
  }
  "minPlayers": number;
  "maxPlayers": number;
  "players": [
    {
      "_id": string,
      "name": string
    }
  ]
  "state": string;
}
