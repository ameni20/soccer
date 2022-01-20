import { MatchService } from './../../services/match.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-match',
  templateUrl: './display-match.component.html',
  styleUrls: ['./display-match.component.css']
})
export class DisplayMatchComponent implements OnInit {

  id:any;
  match:any;
  constructor(
    private activatedRoute:ActivatedRoute,
    private matchService:MatchService
  ) { }

  ngOnInit() {
    // this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = localStorage.getItem('idMatch');
    this.matchService.getMatchById(this.id).subscribe(
      data => {
        this.match = data.match;
      }
    )
  }

}
