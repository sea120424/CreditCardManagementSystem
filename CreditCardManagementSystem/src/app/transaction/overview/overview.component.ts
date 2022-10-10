import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { TransactionInterface } from '../transaction.interface';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  transactionData: TransactionInterface[] = [];
  FliteredTransactionData: TransactionInterface[] = [];
  isFetching = true;
  isFliter = false;
  filterCardName!: number;
  FliterIdx: number[] = [];
  Idx = 0;
t: any;


  constructor(private transcationService: TransactionService) {
    
  }

  ngOnInit(): void {
    // this.OnFetchDatas();
    this.OnFetchDatas();
    console.log(this.isFetching);
    console.log(this.transactionData);
  }

  OnFetchDatas(){
    this.transcationService.fetchDatas().subscribe(data => {
      this.transactionData = data;
      
      // console.log(this.transactionData);
      this.isFetching = false;
    })
  }

  OnDeleteTransaction(id: number){
    const uid = this.transactionData[id].uid;
    this.transcationService.deleteTransaction(uid);
    this.transactionData.splice(id, 1);
    // window.location.reload();
  }

  OnDeleteFliteredTransaction(id: number){
    const uid = this.transactionData[this.FliterIdx[id]].uid;
    this.transcationService.deleteTransaction(uid);
    this.transactionData.splice(this.FliterIdx[id], 1);
    this.FliteredTransactionData.splice(id, 1);
    this.FliterIdx.splice(id, 1);

    // window.location.reload();
  }

  OnFliter(){
    this.Idx = 0;
    this.FliterIdx = [];
    console.log(this.filterCardName);


    this.FliteredTransactionData = [];
    if(!this.filterCardName){
      this.isFliter = false;
      return;
    }

    for(var index in this.transactionData){

      console.log(index);
      console.log(this.transactionData[index].credit_card.card_number);
      if(this.transactionData[index].credit_card.card_number === this.filterCardName){
        this.FliteredTransactionData.push(this.transactionData[index]);
        this.FliterIdx.push(+index);
      }
    }
    this.isFliter = true;
  }

}
