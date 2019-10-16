import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todoitems',
  templateUrl: './todoitems.component.html',
  styleUrls: ['./todoitems.component.css']
})
export class TodoitemsComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  // Set Dynamic CLasses
  setClasses () {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }

    return classes;
  }

  onToggle(todo) {
    console.log("toggle");
    // Toggle in UI
    todo.completed=!todo.completed;
    // Toggle on Server
    this.todoService.toggleCompleted(todo).subscribe(todo =>
      console.log(todo));

  }

  onClick(todo) {
    console.log("click");
    this.deleteTodo.emit(todo);
  }
}
