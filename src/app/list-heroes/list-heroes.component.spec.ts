import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHeroesComponent } from './list-heroes.component';

describe('ListHeroesComponent', () => {
  let component: ListHeroesComponent;
  let fixture: ComponentFixture<ListHeroesComponent>;

  beforeEach(async(() => {
    /*
    Avant chaque test on crée on crée un genre de NgModule,
    avec ses propres declarations de components,
    ses imports de module et ses providers de service.
    pour tester : ng test
    */
    TestBed.configureTestingModule({
      declarations: [ ListHeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
