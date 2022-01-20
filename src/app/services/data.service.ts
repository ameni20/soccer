import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
  createDb(){

   let players =  [
      {id:1, name:"Bale", dateOfBirth: '12/10/1989', 
      poste: 'ATK', image: 'assets/images/img_2.jpg'},
      {id:2, name:"Messi", dateOfBirth: '12/10/1989', 
      poste: 'ATK', image: 'assets/images/img_2.jpg'},
      {id:3, name:"Ronaldo", dateOfBirth: '12/10/1989', 
      poste: 'ATK', image: 'assets/images/img_2.jpg'},
      {id:4, name:"Salah", dateOfBirth: '12/10/1989', 
      poste: 'ATK', image: 'assets/images/img_2.jpg'},
      {id:5, name:"Xavi", dateOfBirth: '12/10/1989', 
      poste: 'ATK', image: 'assets/images/img_2.jpg'},
      {id:6, name:"Iniesta", dateOfBirth: '12/10/1989', 
      poste: 'ATK', image: 'assets/images/img_2.jpg'},
      {id:7, name:"Khlifa", dateOfBirth: '12/10/1989', 
      poste: 'ATK', image: 'assets/images/img_2.jpg'},
      {id:8, name:"Dhawadi", dateOfBirth: '12/10/1989', 
      poste: 'ATK', image: 'assets/images/img_2.jpg'},
    ];

    let matches = [
      {id:1, scoreOne: 2,details: {},playersTeamOne: ['Messi', 'Anas'],playersTeamTwo: ['Salah', 'Ali', 'Karim'], scoreTwo: 3, teamOne: 'FCB', teamTwo: 'RMD'},
      {id:2, scoreOne: 1,playersTeamOne: ['Anas'],playersTeamTwo: ['Salah', 'Ali'], scoreTwo: 2, teamOne: 'JUV', teamTwo: 'NAP'},
      {id:3, scoreOne: 0,playersTeamOne: [],playersTeamTwo: [], scoreTwo: 0, teamOne: 'LIV', teamTwo: 'MCI'},
      {id:4, scoreOne: 4,playersTeamOne: ['xavi','Iniesta','Messi', 'Anas'],playersTeamTwo: ['Salah', 'Ali'], scoreTwo: 2, teamOne: 'EST', teamTwo: 'CA'}
    ];

   return {players,matches};

  }
}