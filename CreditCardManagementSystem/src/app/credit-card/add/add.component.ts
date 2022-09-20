import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors, FormBuilder } from '@angular/forms';
import { CardService } from '../card.service';
import { CardInterface } from '../card.interface';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  constructor(private cardService: CardService, private formBuilder: FormBuilder) { }
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
      'card_number': new FormControl("", [Validators.required, this.CardNameChecker.bind(this)]),
      // 'card_number': new FormControl(null, [Validators.required]),
      'cardholder_name': new FormControl(null),
      'csc_code': new FormControl(null),
      'expiration_date_month': new FormControl(null),
      'expiration_date_year': new FormControl(null),
      'issuer': new FormControl(null)
    });
    
  }

  OnCreateData(){
    console.log(this.AddCardForm);
    this.cardService.AddCard(this.AddCardForm.value)
  }

  
  CardNameChecker(control: FormControl): {[s: string]: boolean} | null
   {
    if(!control.value){
      return {"InValidLen": true};
    }
    const cardNumberLen = control.value.toString().length;


    
    console.log(cardNumberLen);

    if(cardNumberLen < 7 || cardNumberLen > 16){
      return {"InValidLen": true};
    }
    
    return null;
  }
}
