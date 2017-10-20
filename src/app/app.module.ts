// 3
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Le HttpClientModule : Permet de faire des appel ajax
import {HttpClientModule} from '@angular/common/http';
// Le FormsModule : Permet de faire le ng model
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ListHeroesComponent } from './list-heroes/list-heroes.component';
import { HeroComponent } from './hero/hero.component';
import { HeroesService } from './heroes.service';


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
  providers: [HeroesService], // Maintenant on peut s'en servir dans le component.
  bootstrap: [AppComponent]
})
export class AppModule { }
