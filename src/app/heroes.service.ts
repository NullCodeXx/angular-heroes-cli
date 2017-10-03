// 2
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Hero} from './hero';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HeroesService {
  private urlWs = 'http://localhost:3000/heroes';

  constructor(private http:HttpClient) { }

  getAllHeroes():Observable<Hero[]> { //Le Observable est un genre de promise.
    return this.http.get<Hero[]>(this.urlWs) //On renvoie une observable par le biais de la requete http.
  }

  getHeroById(id:number):Observable<Hero> {
    return this.http.get<Hero>(this.urlWs + '/' + id)
  }

  modifyHero(hero:Hero):Observable<any> {
    return this.http.patch(this.urlWs + '/' + hero.id, hero)
  }


}
