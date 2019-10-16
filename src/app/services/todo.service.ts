import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=5';

  constructor(private httpClient:HttpClient) { }

  getTodos():Observable<Todo[]>  {
    return this.httpClient.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }
}
