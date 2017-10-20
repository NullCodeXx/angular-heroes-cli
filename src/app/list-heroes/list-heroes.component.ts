// 4

import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.css']
})
export class ListHeroesComponent implements OnInit {
  liste: Hero[];
  
  constructor(private hs:HeroesService) { } //inject du provider.

  ngOnInit() {
    this.hs.getAllHeroes().subscribe((heroes) => //subscribe correspond au then de la promise.
    this.liste = heroes);
  }

  //methode pour mettre juste la première lettre en majuscule puis on va la tester.
  //Fichier list-heroes.component.html line : 6 (click).
  inspect(hero:Hero) {
    console.log(hero);
    hero.name = hero.name.substr(0,1).toUpperCase() + hero.name.substr(1);
  }
}