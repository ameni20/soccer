import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from './../../services/match.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {

  match:any={};
  matchForm:FormGroup;
  id:any;
  constructor(
    private formBuilder:FormBuilder,
    private matchService:MatchService,
    private router:Router,
    private activated:ActivatedRoute) { }

  ngOnInit() {
    // le module ActivatedRoute permet de snapshoter (capturer)
    // l'URL active et mapper pour faire retourner le paramètre ID
    this.id = this.activated.snapshot.paramMap.get('id');
    this.matchService.getMatchById(this.id).subscribe(
      data => {
        this.match = data.match;
      }
    )
    this.matchForm = this.formBuilder.group({
      teamOne:[''],
      scoreOne:[''],
      teamTwo:[''],
      scoreTwo:['']
    });
  }

  editMatch() {
    this.matchService.editMatch(this.match).subscribe(
      () => {
        alert('Match was successfully updated')
        this.router.navigate(['admin']);
      }
    )
  }

}
