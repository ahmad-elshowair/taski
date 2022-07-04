import React from 'react'
import { Todo } from '../interfaces/todo'
import {AiTwotoneDelete, AiTwotoneEdit, AiOutlineFileDone} from 'react-icons/ai'

interface Props{
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
export const Task: React.FC<Props> = ({todo, todos, setTodos}) => {
  return (
    <div className="single-task mb-2">
      <span className="todo_single-task">
        {todo.todo}
      </span>
      <div className="task-actions">
        <span className="icon delete-icon">
          <AiTwotoneDelete/>
        </span>
        <span className="icon edit-icon">
          <AiTwotoneEdit/>
        </span>
        <span className="icon done-icon">
          <AiOutlineFileDone/>
        </span>
      </div>
    </div>
  )
}
