import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import { InputTask } from './components/InputTask';
import { Todo } from './interfaces/todo';
import { nanoid } from 'nanoid';
import { TaskiList } from './components/TaskiList';
const App: React.FC = ()=> {
  const [todo, setTodo] = React.useState<string>("");
  const [todos, setTodos] = React.useState<Todo[]>([]);
const [completedTasks, setCompletedTasks] = React.useState<Todo[]>([])

  // add the new task to todo list
  const add = (event: React.FormEvent)=>{
    event.preventDefault();
    if(todo){
      setTodos(prevTodos => {
        return [
          ...prevTodos,
          {
            id: nanoid(),
            todo,
            isDone: false
          }
        ];
      });
      setTodo("");
    }
  }

  // const onDragEnd=()=>{

  // }
  return (
      <main className="app bg-info pt-5">
        <header className='header'>
          <h1 className="heading text-uppercase">Taski</h1>
        </header>
        <InputTask 
          todo={todo} 
          setTodo={setTodo}
          add={add}
        />
        <TaskiList
          todos={todos}
          setTodos={setTodos}
          completedTasks={completedTasks}
          setCompletedTasks={setCompletedTasks}
        />
      </main>
  );
}

export default App;
