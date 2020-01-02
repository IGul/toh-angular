// import { HeroesComponent } from './heroes.component';
// import { of, timer } from 'rxjs';
// import { mapTo } from 'rxjs/operators';
// import { HeroDataService } from '../hero-data.service';

// describe('Heroes Component', () => {
//   let component: HeroesComponent;
//   const fakeUser: any = {id: 1, name: 'fake', saying: 'hi'};
//   // const fakeHeroDataService = {
//   //   getHeroes: () => of([fakeUser]),
//   //   httpClient: {}
//   // } as any;

//   // const fakeHeroDataService = jasmine.createSpyObj('userService', ['getHeroes']);

//   const heroDataService = new HeroDataService(null);

//   beforeEach(() => {
//     component = new HeroesComponent(heroDataService);
//   });

//   it('should have a component', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should have list of heroes', () => {
//     // const spy = fakeHeroDataService.getHeroes.and.returnValue(of([fakeUser]));

//     const spy = spyOn(heroDataService, 'getHeroes').and.returnValue(of([fakeUser]));
//

//    component.getHeroes().subscribe(hero => {
//      console.log(hero);
//      expect(hero).toEqual([fakeUser]);
//      done();
//    });

//     expect(spy).toHaveBeenCalled();
//     expect(spy).toHaveBeenCalledWith();
//     expect(spy).toHaveBeenCalledTimes(1);
//   });

//   it('should have list of heroes', (done) => {
//     // const spy = fakeHeroDataService.getHeroes.and.returnValue(of([fakeUser]));

//     const spy = spyOn(heroDataService, 'getHeroes').and.returnValue(timer(1000).pipe(mapTo([fakeUser])));
//     component.getHeroes().subscribe(hero => {
//      console.log(hero);
//      expect(hero).toEqual([fakeUser]);
//      done();
//    });
//   });

// });



import { async, ComponentFixture, TestBed, fakeAsync, tick, discardPeriodicTasks } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HeroesComponent } from './heroes.component';
import { HeroDataService } from '../hero-data.service';
import { HttpClient } from 'selenium-webdriver/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of, timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let heroDataService: HeroDataService;
  const fakeUser: any = {id: 1, name: 'fake', saying: 'hi'};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ HeroesComponent ],
      providers: [
        HeroDataService,
        { provide: HttpClient, useValue: {} }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    heroDataService = TestBed.get(HeroDataService);
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have list of heroes with done', (done) => {
    const spy = spyOn(heroDataService, 'getHeroes').and.returnValue(timer(1000).pipe(mapTo([fakeUser])));

    component.getHeroes().subscribe(hero => {
      console.log(hero);
      expect(hero).toEqual([fakeUser]);
      done();
    });
  });

  it('should have list of heroes', fakeAsync(() => {
    // const spy = fakeHeroDataService.getHeroes.and.returnValue(of([fakeUser]));

    const spy = spyOn(heroDataService, 'getHeroes').and.returnValue(timer(1000).pipe(mapTo([fakeUser])));
    component.getHeroes().subscribe(hero => {
      console.log(hero);
      expect(hero).toEqual([fakeUser]);
    });

    tick(1000);

    discardPeriodicTasks();
  }));


});


