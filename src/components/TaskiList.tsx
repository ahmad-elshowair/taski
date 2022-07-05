import React  from "react";
import { Todo } from "../interfaces/todo";
import { Task } from "./Task";


interface Props{
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  completedTasks: Todo[];
  setCompletedTasks: React.Dispatch<React.SetStateAction<Todo[]>>

}
export const TaskiList : React.FC<Props> = ({todos, setTodos, completedTasks, setCompletedTasks}) =>{
  return (
    <section className="taski-list-section">
      <div className="container">
        <div className="lists">
          <div className="tasks progress-list">
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
          <div className="tasks completed-list">
            <header className="list-header mb-2">
              <h2 className="list-heading">
                completed tasks
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
        </div>
      </div>
    </section>
  );

}