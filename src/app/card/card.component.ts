import { Component, OnInit } from '@angular/core';
import { CardService } from './card.service';
import { Card } from './card';
import { timer } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  cards: Card[]=[];

  ngOnInit() {
    const source = timer(0,5000);
    source.subscribe(() => this.getCards());
  }

  constructor(private cardService: CardService){}


  getCards(){
    this.cardService.getProjects()
      .subscribe(cards => this.cards = cards);
  }

  finishTodo(num1:number, num2:number){
   this.cardService.completeTodo(num1,num2);
  }
}

