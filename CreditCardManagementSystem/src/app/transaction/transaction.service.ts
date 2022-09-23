import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionInterface } from './transaction.interface';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  url = 'http://localhost:3000/transactions';

  constructor(private http:HttpClient) { }

  fetchDatas(): Observable<TransactionInterface[]> {
    return this.http.get<TransactionInterface[]>(this.url);
  }

  deleteTransaction(uid: string){
    this.http.delete(`${this.url}/${uid}`).subscribe();
    
  }
}
