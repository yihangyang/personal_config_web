import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  title = 'app';
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {

  }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((result: Hero[]) => {
      this.heroes = result
    })
  }
}

