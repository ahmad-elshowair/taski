import React  from "react";
import { Todo } from "../interfaces/todo";
import { Task } from "./Task";


interface Props{
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
export const TaskiList : React.FC<Props> = ({todos, setTodos}) =>{
  return (
    <section className="taski-list-section">
      <div className="container">
        <div className="lists row">
          <div className="progress-list col-md-6 mb-5">
            <header className="list-header mb-2">
              <h2 className="list-heading">
                on progress tasks
              </h2>
            </header>
            
            {
              /* list all on progress tasks */
              todos.map(todo => (
                <Task
                  key={todo.id}
                  todo={todo}
                  todos={todos}
                  setTodos={setTodos}

                />
              ))
            }
            
          </div>
          <div className="completed-list col-md-6">
            <header className="list-header">
              <h2 className="list-heading">
                completed tasks
              </h2>
            </header>

          </div>
        </div>
      </div>
      
    </section>
  );

}