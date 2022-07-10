import React  from "react";
import { Todo } from "../interfaces/todo";
import { Task } from "./Task";
import {Droppable} from 'react-beautiful-dnd'


interface Props{
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  completedTasks: Todo[];
  setCompletedTasks: React.Dispatch<React.SetStateAction<Todo[]>>;
}
export const TaskiList : React.FC<Props> = ({todos, setTodos, completedTasks, setCompletedTasks}) =>{
  return (
    <section className="taski-list-section">
      <div className="container">
        <div className="lists">
          <Droppable droppableId="process">
            {
              (provided)=>(
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="tasks process"
                >
                  <header className="list-header mb-2">
                    <h2 className="list-heading">
                      on progress tasks
                    </h2>
                  </header>
                  {
                    /* list all on progress tasks */
                    todos.map((todo, index) => (
                      <Task
                        index={index}
                        key={todo.id}
                        todo={todo}
                        todos={todos}
                        setTodos={setTodos}

                      />
                    ))
                  }
                  {provided.placeholder}
                </div>
                
              )
            }
          </Droppable>

          <Droppable droppableId="completed">
            {
              (provided)=>(
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="tasks completed"
                >
                  <header className="list-header mb-2">
                    <h2 className="list-heading">
                      completed tasks
                    </h2>
                  </header>
                  {
                    /* list all on progress tasks */
                    completedTasks.map((task, index) => (
                      <Task
                        index={index}
                        key={task.id}
                        todo={task}
                        todos={completedTasks}
                        setTodos={setCompletedTasks}
                      />
                    ))
                  }
                  {provided.placeholder}
                </div>
              )
            }
          </Droppable>
        </div>
      </div>
    </section>
  );

}