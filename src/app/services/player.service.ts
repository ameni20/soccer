import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MAT_LABEL_GLOBAL_OPTIONS } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  playerUrl = 'http://localhost:3000';
  constructor(private httpClient:HttpClient) { }

 
  getAllPlayers() {
    return this.httpClient.get<{message:string, players:any}>(`${this.playerUrl}/allPlayers`);
  }
// Get Player By ID
getPlayerById(id:string){
  return this.httpClient.get<{player:any}>(`${this.playerUrl}/api/getPlayer/${id}`);
}

// Delete Player
deletePlayer(id:number){
  return this.httpClient.delete(`${this.playerUrl}/${id}`);
}

// Add Player
addPlayer(player:any,image:File) {
  console.log("this player service",player);
  console.log("this image service", image);
  
  
  let formData = new FormData();
  formData.append('name', player.name);
  formData.append('poste', player.poste);
  
  formData.append('image', image);
  return this.httpClient.post(`${this.playerUrl}/addPlayer`, formData);
}

// Edit Player
editPlayer(player:any) {      
  return this.httpClient.put<{message: string}>(`${this.playerUrl}/api/editPlayer/${player._id}`, player);
}


}
