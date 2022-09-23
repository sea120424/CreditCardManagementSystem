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
  isFetching = true;
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
}
