import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Le HttpClientModule : Permet de faire des appel ajax
import {HttpClientModule} from '@angular/common/http';
// Le FormsModule : Permet de faire le ng model
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ListHeroesComponent } from './list-heroes/list-heroes.component';
import { HeroComponent } from './hero/hero.component';


@NgModule({
  declarations: [
    AppComponent,
    ListHeroesComponent,
    HeroComponent
  ],
  imports: [
    //Import les modules.
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
