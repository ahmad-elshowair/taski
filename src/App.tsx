import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import { InputField } from './components/InputField';
import { Todo } from './interfaces/todo';
import { nanoid } from 'nanoid';

const App: React.FC = ()=> {
  const [todo, setTodo] = React.useState<string>("");
  const [todos, setTodos] = React.useState<Todo[]>([]);

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
    }
  }
  console.log(todos);
  return (
    <div className="app bg-info">
      <header className='header'>
        <h1 className="heading text-uppercase">Taski</h1>
      </header>
      <InputField 
        todo={todo} 
        setTodo={setTodo}
        add={add}
      />
    </div>
  );
}

export default App;
