import {Type, plainToClass} from "class-transformer";

export class Card {
    public id?: number;
    public title?: string;

    @Type(() => Todo)
    public todos?: Todo[];
  static id: any;
}

export class Todo {
  public id?:  number;
  public text?: string;
  public isCompleted?: boolean;
}

let card = plainToClass(Card, JSON);
