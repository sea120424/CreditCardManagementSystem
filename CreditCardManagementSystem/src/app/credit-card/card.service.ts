import { Injectable } from '@angular/core';
import { CardInterface } from './card.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs'
import {switchMap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CardService {

  url = 'http://localhost:3000/cards';

  constructor(private http:HttpClient) { }

  fetchDatas(): Observable<CardInterface[]> {
    return this.http.get<CardInterface[]>(this.url);
  }

  fetchData(id: number){
    return this.http.get<CardInterface[]>(this.url).pipe(
      switchMap((list) => {
        let item = list[+id];
        return of(item);
      })
    );
  }

}
