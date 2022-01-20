import { Router } from '@angular/router';
import { MatchService } from './../../services/match.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-matches',
  templateUrl: './admin-matches.component.html',
  styleUrls: ['./admin-matches.component.css']
})
export class AdminMatchesComponent implements OnInit {

  matches:any;
  constructor(
    private matchService:MatchService) { }

  ngOnInit() {
    this.matchService.getAllMatches().subscribe(
      data => {
        this.matches = data;
      }
    )
  }
  delete(id:string) {
    this.matchService.deleteMatch(id).subscribe(
      () => {
        console.log('match deleted successfully');
      }
    )
  }

}
