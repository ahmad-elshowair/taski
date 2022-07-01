import React from "react";
export  const InputField: React.FC = () =>{
  return(
      <section className="input-section"> 
        <div className="container">
          <div className="row mb-5">
            <input 
              type="text" 
              id='search' 
              name="search"
              className="form-control-lg col-md-12"
              placeholder="type your task"
            />
            <button className="btn btn-primary text-uppercase">add</button>
          </div>
        </div>
      </section>
  );
}