import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
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

  AddTransaction(transaction: TransactionInterface){
    this.http.post(this.url, transaction).subscribe()
  }


  FilterTransactions(card_number: number): Observable<TransactionInterface[]> {
    let filteredTransactions: TransactionInterface[] = [];

    this.fetchDatas()
      .pipe(
        switchMap((list) => {
          for (let index = 0; index < list.length; index++) {
            let element = list[index];
            element.amount = Number(element.amount.toFixed(2));
            if (element.credit_card.card_number == card_number) {
              console.log('Transactions: ' + element.uid);
              filteredTransactions.push(element);
            }
          }
          return of(filteredTransactions);
        })
      )
      .subscribe();
    return of(filteredTransactions);
  }
}
