import { Router } from '@angular/router';
import { Player } from './../model/Player';
import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-add-joueur',
  templateUrl: './add-joueur.component.html',
  styleUrls: ['./add-joueur.component.css']
})
export class AddJoueurComponent implements OnInit {
Player:Player=new Player();
  constructor(private playerService:PlayerService,private router:Router) { }

  ngOnInit(): void {
  }
add(){
  this.playerService.addPlayer(this.Player).subscribe(
    {
      next:()=>{this.router.navigate(['/player'])},
      error:(error)=>{console.log(error)}

})}
}
