import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AdminComponent } from './components/admin/admin.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ServiceComponent } from './components/service/service.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';

const routes: Routes = [
  // localhost:4200 : URL de base
  {path:'', component:HomeComponent},
  // localhost:4200/contact => Afficher contact
  {path:'contact', component:ContactComponent},
  // localhost:4200/service => Afficher service
  {path:'service', component:ServiceComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'matches', component:MatchesComponent},
  {path:'admin', component:AdminComponent},
  {path:'players', component:PlayersComponent},
  {path:'add-match', component:AddMatchComponent},
  {path: 'add-player', component: AddPlayerComponent},
  {path:'edit-match/:id', component:EditMatchComponent},
  {path:'display-match/:id', component:DisplayMatchComponent},
  {path: 'display-player/:id', component: DisplayPlayerComponent},
  {path: 'edit-player/:id', component: EditPlayerComponent},
  // **: path par défaut ,path not found
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
