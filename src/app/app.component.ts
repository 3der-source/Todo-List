import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Feito por Eder';
  todos = [
    {
      string: 'Leite pros filhos',
      done: true,
      priority: 10
    },
    {
      string: 'Celular',
      done: true,
      priority: 1
    },
    {
      string: 'Limpar casa',
      done: false,
      priority: 4
    },
    {
      string: 'Arrumar construção',
      done: false,
      priority: 5
    },
  ];
  addTodo(newTodoLabel) {
    var newTodo = {
      string: newTodoLabel,
      priority: 1,
      done: false
    }
    this.todos.push(newTodo);
  }
  deleteTodo(Todo) {
    this.todos = this.todos.filter(todo => todo.string !== Todo.string)
  }
}

