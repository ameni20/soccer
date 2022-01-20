import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  imagePreview: any;
  playerForm: FormGroup;
  player:any ={}
  constructor(
    private formBuilder: FormBuilder,
    private playerService: PlayerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.playerForm = this.formBuilder.group({
      name: [''],
      poste: [''],
     
      image: ['']
    })
  }

  addPlayer() {
    console.log('This is my player', this.player);
    console.log('img',this.playerForm.value.image);
    
    this.playerService.addPlayer(this.player, this.playerForm.value.image).subscribe(
      () => {
        console.log('Added player successfully');
        this.router.navigate(['admin']);
      }
    )
  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    console.log('File',file);
    
    this.playerForm.patchValue({ image: file });
    this.playerForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    }; reader.readAsDataURL(file);
  }

}

