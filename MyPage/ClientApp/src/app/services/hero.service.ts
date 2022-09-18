import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private http: HttpClient) {
    }

  public getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${environment.apiUrl}`+ 'hero')
  }
}
