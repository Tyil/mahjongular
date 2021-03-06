import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GameslistComponent } from './gameslist/gameslist.component';
import { HomeComponent } from './home/home.component';
import { GamesService } from './services/games.service';

const appRoutes: Routes = [
  { path: "games", component: GameslistComponent },
  { path: "", component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GameslistComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [GamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
