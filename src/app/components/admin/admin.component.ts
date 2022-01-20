import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { MatchService } from './../../services/match.service';
import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users:any;
  matches:any;
  players : any;
  constructor(
    private matchService:MatchService,
    private userService:UserService,
    private playerService : PlayerService,
    private router:Router) { }

  ngOnInit() {
    this.getMatches();
    this.getUsers();
    this.getPlayers();
  }
  getMatches() {
    this.matchService.getAllMatches().subscribe(
      data => {
        this.matches = data.matches;
      }
    );
  }

  getUsers() {
    this.userService.getAllUsers().subscribe(
      data => {
        console.log();
        
        this.users = data.users;
      }
    );
  }

  getPlayers(){
    this.playerService.getAllPlayers().subscribe(
      data => {
        this.players = data.players;
      }
    );
  }
  deleteMatch(id:string) {
    this.matchService.deleteMatch(id).subscribe(
      () => {
        this.getMatches();
      }
    )
  }

  editMatch(id:any) {
    this.router.navigate([`edit-match/${id}`]);
  }

  displayMatch(id:any) {
    localStorage.setItem('idMatch', id);
    this.router.navigate([`display-match/${id}`]);
  }

  deleteUser(id:string) {
    this.userService.deleteUser(id).subscribe(
      () => {
        this.getUsers();
      }
    )
  }
  // declaration d'une fonction
  displayPlayer(id: number) {
    this.router.navigate([`display-player/${id}`]);
  }
  editPlayer(id: number) {
    this.router.navigate([`edit-player/${id}`]);
  }
  deletePlayer(id:number) {
    this.playerService.deletePlayer(id).subscribe(
      () => {
        this.getPlayers();
      }
    )
  }
 


}
