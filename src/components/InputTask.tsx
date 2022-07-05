import React, { useRef } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  add: (event: React.FormEvent) => void
}

export  const InputTask: React.FC<Props> = ({todo, setTodo, add}) =>{

 const inputRef = useRef<HTMLInputElement>(null);
 
  return(
      <section className="input-section"> 
        <div className="container">
          <form 
            className="row mb-3" 
            onSubmit=
              {
                (event)=>{
                  add(event);
                  inputRef.current?.blur();
                }
              }
          >
            <input 
              type="text" 
              id='search' 
              name="search"
              className="form-control-lg col-md-12"
              placeholder="type your task..."
              value={todo}
              onChange={(event) => setTodo(event.target.value)}
            />
            <button className="btn btn-primary text-uppercase" type="submit">add</button>
          </form>
        </div>
      </section>
  );
}