import { Injectable } from '@angular/core';
import { CardInterface } from './card.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class CardService {

  url = 'http://localhost:3000/cards';

  constructor(private http:HttpClient) { }

  fetchData(): Observable<CardInterface[]> {
    return this.http.get<CardInterface[]>(this.url);
  }

}
