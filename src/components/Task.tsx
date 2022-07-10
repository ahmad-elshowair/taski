import React, { FormEvent } from 'react'
import { Todo } from '../interfaces/todo'
import {AiTwotoneDelete, AiTwotoneEdit, AiOutlineFileDone} from 'react-icons/ai'
import {Draggable} from 'react-beautiful-dnd'
interface Props{
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  index: number;
}
export const Task: React.FC<Props> = ({index, todo, todos, setTodos}) => {

  const handleDelete = (id: string)=>{
    setTodos(todos.filter(todo=> todo.id!== id))
  }

  const handleDone = (id: string) =>{
    setTodos(
      todos.map((todo)=> 
      todo.id === id ?
       {...todo, isDone: !todo.isDone}
       : todo)
    );
  }

  const [edit, setEdit] = React.useState(false);
  const [editTask, setEditTask] = React.useState(todo.todo);

  const handleEditTask =(event: FormEvent, id: string) =>{
    event.preventDefault();
    setTodos((prevTasks) => {
      return prevTasks.map((task)=>{
        return task.id === id ?
        {
          ...task,
          todo: editTask
        }
        : task
      });
    });
    setEdit(false);
  };
  const styleDone = {
    opacity: todo.isDone ?'.5' : "1"
  }

  const focusEditTask = React.useRef<HTMLInputElement>(null);
  
  React.useEffect(() => {
    focusEditTask.current?.focus()
  }, [edit])
  
  return (
    <Draggable draggableId={todo.id} index={index}>
      {
        (provided)=>(
          <form 
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            className="single-task mb-2" 
            onSubmit={(event) => handleEditTask(event, todo.id)}
          >
            {
              edit ? (
                <input
                  ref={focusEditTask}
                  type="text"
                  name='editTask'
                  value={editTask}
                  onChange={(event) =>setEditTask(event.target.value)}
                  className="form-control edit-task-input"
                />
              ) :(
                // if the task is done strike it with crossed line
                todo.isDone ? (
                  <s className="todo_single-task" style={styleDone}>{todo.todo}</s>
                ):(
                // if not just show normal task
                  <span className="todo_single-task">{todo.todo}</span>
                )
              )
            }
            
            <div className="task-actions">
              <span className="icon delete-icon" onClick={()=> handleDelete(todo.id)}>
                <AiTwotoneDelete/>
              </span>
              <span 
                className="icon edit-icon"
                onClick={() => 
                  {
                    if(!edit && !todo.isDone){
                      setEdit(!edit);
                    }
                  }
                }
              >
                <AiTwotoneEdit/>
              </span>
              <span className="icon done-icon" onClick={()=>handleDone(todo.id)}>
                <AiOutlineFileDone/>
              </span>
            </div>
          </form>
        )
      }
    </Draggable>
  )
}
