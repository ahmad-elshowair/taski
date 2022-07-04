import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  add: (event: React.FormEvent) => void
}

export  const InputField: React.FC<Props> = ({todo, setTodo, add}) =>{
  return(
      <section className="input-section"> 
        <div className="container">
          <form className="row mb-5" onSubmit={add}>
            <input 
              type="text" 
              id='search' 
              name="search"
              className="form-control-lg col-md-12"
              placeholder="type your task..."
              value={todo}
              onChange={(event) => setTodo(event.target.value)}
            />
            <button className="btn btn-primary text-uppercase">add</button>
          </form>
        </div>
      </section>
  );
}