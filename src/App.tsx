import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import { InputTask } from './components/InputTask';
import { Todo } from './interfaces/todo';
import { nanoid } from 'nanoid';
import { TaskiList } from './components/TaskiList';
import {DragDropContext, DropResult} from 'react-beautiful-dnd'

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

  const onDragEnd=(result: DropResult)=>{
    const {source, destination} = result;

    // if there is no destination return nothing
    if(!destination)return;

    // if destination and source are the same return noting
    if(destination.droppableId === source.droppableId && destination.index === source.index) return;

    let add;
    let active = todos;  // active tasks
    let completed = completedTasks; // completed tasks

    // if the source is equal to 'process'  remove the specific task  
    if(source.droppableId=== "process"){
      add = active[source.index]; // determine the task
      active.splice(source.index, 1) // remove it from the active tasks
    }else{
      add = completed[source.index];
      completed.splice(source.index, 1) // remove it from the completed tasks
    }

    // if destination is equal 'process' add the task to process tasks
    if(destination.droppableId==="process"){
      active.splice(destination.index, 0, add)
    }else{
      // add the task to the completed tasks
      completed.splice(destination.index, 0, add);
    }
  };


  return (
    <DragDropContext onDragEnd={onDragEnd}>
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
    </DragDropContext>
  );
}

export default App;
