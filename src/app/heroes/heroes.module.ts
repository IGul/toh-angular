import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatListModule } from '@angular/material';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDataService } from './hero-data.service';


@NgModule({
  declarations: [HeroesComponent],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    HttpClientModule,
    MatListModule

  ],
  providers: [HeroDataService]
})
export class HeroesModule { }
