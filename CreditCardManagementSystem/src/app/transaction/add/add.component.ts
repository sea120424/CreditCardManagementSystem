import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CardInterface } from 'src/app/credit-card/card.interface';
import { CardService } from 'src/app/credit-card/card.service';
import { TransactionInterface } from '../transaction.interface';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private transactionService: TransactionService,
              private cardService: CardService,
              private jumper: Router) { }
  AddTransactionForm!: FormGroup;
  CardList: CardInterface[] = [];
  ExistCard = false;
  NewCard!: CardInterface;

  ngOnInit(): void {
    this.AddTransactionForm = new FormGroup({
      'card_number': new FormControl(null, [Validators.required, this.CardNumberChecker.bind(this)]),
      'amount': new FormControl(null, Validators.required),
      'currency': new FormControl(null, Validators.required),
      'date': new FormControl(null, Validators.required)
    })
    this.OnFetchCardData();
  }

  OnFetchCardData(){
    this.cardService.fetchDatas().subscribe(data => {
      this.CardList = data;
    });
    console.log("Fetching Card Data");
  }

  OnCreateTransaction(){
    // console.log(this.AddTransactionForm);
    for(var index in this.CardList){
        if(this.CardList[+index].card_number === this.AddTransactionForm.value.card_number){
          this.NewCard = this.CardList[+index];
        }
    }
    // console.log(this.NewTransaction);
    var NewTransaction: TransactionInterface = {
      credit_card: this.NewCard,
      uid: "",
      amount: 0,
      comment: "",
      date: 0,
      currency: ""
    };

    // NewTransaction: TransactionInterface ;

    NewTransaction.amount = this.AddTransactionForm.value.amount;
    NewTransaction.currency = this.AddTransactionForm.value.currency;
    NewTransaction.date = this.AddTransactionForm.value.date;
    NewTransaction.uid = this.AddTransactionForm.value.uid;
    NewTransaction.comment = this.AddTransactionForm.value.comment;
    //NewTransaction.credit_card = this.NewCard;
    console.log(NewTransaction.credit_card);

    this.transactionService.AddTransaction(NewTransaction);
    this.jumper.navigate(['/transactions']);
  }

  CardNumberChecker(control: FormControl): {[s: string]: boolean} | null {
    this.ExistCard = false;
    if(!control.value){
      return {"InValidLen": true};
    }
    if(control.value % 1 !== 0){
      return {"InValidLen": true};
    }

    const cardNumberLen = control.value.toString().length;
  
    // console.log(cardNumberLen);
    if(cardNumberLen < 7 || cardNumberLen > 16){
      return {"InValidLen": true};
    }
    if(this.CardList.length === 0){
      return {"CardNonExist": true};
    }
    // console.log(this.CardList);
   for(var index in this.CardList) {
      if(this.CardList[index].card_number === control.value){
        this.ExistCard = true;
        console.log(this.CardList);
        return null;
      }
    }

    if(!this.ExistCard){
      return {"CardNonExist": true};
    }

    return null;
  }

}
