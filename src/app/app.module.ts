import { DataService } from './services/data.service';
import { PlayerComponent } from './components/player/player.component';
import { PlayersComponent } from './components/players/players.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServiceComponent } from './components/service/service.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { WordCupComponent } from './components/word-cup/word-cup.component';
import { ScoreComponent } from './components/score/score.component';
import { NewsComponent } from './components/news/news.component';
import { InfosComponent } from './components/infos/infos.component';
import { VideosComponent } from './components/videos/videos.component';
import { BlogComponent } from './components/blog/blog.component';
import { NewComponent } from './components/new/new.component';
import { MatchesComponent } from './components/matches/matches.component';
import { AdminComponent } from './components/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminPlayersComponent } from './components/admin-players/admin-players.component';
import { AdminMatchesComponent } from './components/admin-matches/admin-matches.component';
import { InMemoryWebApiModule } from "angular-in-memory-web-api";  
import { HttpClientModule } from '@angular/common/http';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './components/modal/modal.component';
import { SearchComponent } from './components/search/search.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    ServiceComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    SignupComponent,
    WordCupComponent,
    ScoreComponent,
    NewsComponent,
    InfosComponent,
    VideosComponent,
    BlogComponent,
    NewComponent,
    MatchesComponent,
    AdminComponent,
    PlayersComponent,
    PlayerComponent,
    AdminPlayersComponent,
    AdminMatchesComponent,
    AddMatchComponent,
    EditMatchComponent,
    DisplayMatchComponent,
    ModalComponent,
    SearchComponent,
    AddPlayerComponent,
    DisplayPlayerComponent,
    EditPlayerComponent
  ],
  imports: [
    BrowserModule,
    // InMemoryWebApiModule.forRoot(DataService),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
