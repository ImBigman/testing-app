import { Injectable } from '@angular/core';
import { HttpClient, HttpParams,  HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card, Todo } from './card'
import { plainToClass } from "class-transformer";


@Injectable()
export class CardService {
  private projectsUrl = 'http://localhost:3000/projects';
  private todosUrl = 'http://localhost:3000/todos';
  private completeUrl = 'http://localhost:3000/projects/';

  constructor(private http: HttpClient){}

  getProjects(): Observable<Card[]> {

    return this.http.get<Card[]>(this.projectsUrl)
    // .pipe(
    //   map(data => plainToClass(Card, data as Object[])))
  }

  createTodo(todo: Todo):  Observable<Todo>{
    let headers = new HttpHeaders({'Content-Type':'application/json'})

    return this.http.post(this.todosUrl,headers)
  }

  completeTodo(num1:number,num2:number):  Observable<Todo>{
    let headers = new HttpHeaders({'Content-Type':'application/json'})

    return this.http.patch((this.completeUrl + num1 + "/todos/" + num2),headers)
  }
}

