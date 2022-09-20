import { Component, OnInit } from '@angular/core';
import { CardInterface } from '../card.interface';
import { CardService } from '../card.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  CardData: CardInterface[] = [];

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.OnFetchData();
    
  }

  OnFetchData(){
    this.cardService.fetchData().subscribe(data => {
      console.log(data);
      this.CardData = data;
    });
  }

}
