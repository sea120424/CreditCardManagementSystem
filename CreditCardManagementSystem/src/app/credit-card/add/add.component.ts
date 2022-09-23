import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors, FormBuilder } from '@angular/forms';
import { CardService } from '../card.service';
import { CardInterface } from '../card.interface';
import { Observable } from 'rxjs'
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private cardService: CardService, private formBuilder: FormBuilder, private jumper: Router) { }
  AddCardForm!: FormGroup;

  ngOnInit(): void {
    /*
    this.AddCardForm = this.formBuilder.group({
      card_number: [null, [Validators.required, this.CardNameChecker.bind(this)]],
      cardholder_name: [null],
      csc_code: [''],
      expiration_date_month: [''],
      expiration_date_year: [''],
      issuer: ['']
    })
    */
    
    this.AddCardForm = new FormGroup({
      'card_number': new FormControl("", [Validators.required, this.CardNumberChecker.bind(this)]),
      'cardholder_name': new FormControl(null, Validators.required),
      'csc_code': new FormControl(null, [Validators.required, this.CSCChecker.bind(this)]),
      'expiration_date_month': new FormControl(null, [Validators.required, this.ExpiredMonthChecker.bind(this)]),
      'expiration_date_year': new FormControl(null, Validators.required),
      'issuer': new FormControl(null)
    });
    
  }

  OnCreateData(){
    console.log(this.AddCardForm);
    this.cardService.AddCard(this.AddCardForm.value)
    this.jumper.navigate(['/']);
  }

  
  CardNumberChecker(control: FormControl): {[s: string]: boolean} | null
   {
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
    return null;
  }

  CSCChecker(control: FormControl): {[s: string]: boolean} | null {
    if(!control.value){
      return {"InValidLen": true};
    }
    if(control.value % 1 !== 0){
      return {"InValidLen": true};
    }

    const cscLen = control.value.toString().length;
    if(cscLen !== 3){
      return {"InValidLen": true};
    }
    return null;
  }

  ExpiredMonthChecker(control: FormControl): {[s: string]: boolean} | null {
    if(!control.value){
      return {"InValidLen": true};
    }
    if(control.value % 1 !== 0){
      return {"InValidLen": true};
    }
    const month = control.value;
    if(month < 1 || month > 12){
      return {"InValidLen": true};
    }
    return null;

  }
}
