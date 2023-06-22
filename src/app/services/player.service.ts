import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Player } from '../model/Player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playerURL:string="http://localhost:3000/player";

  constructor(
    private http:HttpClient
  ) { }
  private httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
  getPlayer(){
    return this.http.get<Player[]>(this.playerURL);
  }
  addPlayer(player:Player){
    return this.http.post(this.playerURL,player);
}
}