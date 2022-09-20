import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private cardService: CardService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.OnFetchData(this.id);
  }

  OnFetchData(id: number){
    this.cardService.fetchData(id).subscribe(data => {
      console.log(data);
      this.singleCard = data;
    });
  }
}
