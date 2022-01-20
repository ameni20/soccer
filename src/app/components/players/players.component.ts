import { PlayerService } from './../../services/player.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
// variable globale
players:any;
constructor(private playerService:PlayerService) { }

ngOnInit() {
  this.playerService.getAllPlayers().subscribe(
    allData => {
      this.players = allData.players;
    }
  )
}

}
  

 
