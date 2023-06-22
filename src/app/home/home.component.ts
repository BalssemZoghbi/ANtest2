import { Player } from '../model/Player';
import { PlayerService } from './../services/player.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
listPlayers:Player[]=[];
nb:number=0;
nbf:number=0;
  constructor(private playerservice:PlayerService) { }

  ngOnInit(): void {
    this.playerservice.getPlayer().subscribe({
      next:(data)=>{ this.listPlayers=data},
      error:(error)=>console.log(error)
    })
    
    
  }
  Calcul(){
    
this.nb=this.listPlayers.filter(j=>j.etat==true).length;
this.nbf=this.listPlayers.filter(j=>j.etat==false).length;
  }
  change(player: any) {
    player.etat = !player.etat; 
  }
  
    
  }


