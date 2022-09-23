import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionInterface } from 'src/app/transaction/transaction.interface';
import { TransactionService } from 'src/app/transaction/transaction.service';
import { CardInterface } from '../card.interface';
import { CardService } from '../card.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  singleCard!: CardInterface;
  id!: number;
  isFetching = true;
  transactionData: TransactionInterface[] = [];

  constructor(private cardService: CardService, 
              private router: ActivatedRoute, 
              private jumper: Router,
              private transcationService: TransactionService) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.OnFetchData(this.id);
    this.OnFetchTransaction();

  }

  OnFetchData(id: number){
    this.cardService.fetchData(id).subscribe(data => {
      console.log(data);
      this.singleCard = data;
    });
  }

  OnFetchTransaction(){
    this.transcationService.fetchDatas().subscribe(data => {
      this.transactionData = data;
      
      // console.log(this.transactionData);
      this.isFetching = false;
    })
  }

  OnDeleteCard(){
    this.cardService.DeleteCard(this.id);
    this.jumper.navigate(['/']);
  }
}