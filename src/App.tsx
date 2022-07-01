import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import { InputField } from './components/InputField';

const App: React.FC = ()=> {
  return (
    <div className="app bg-info">
      <header className='header'>
        <h1 className="heading text-uppercase">Taski</h1>
      </header>
      <InputField/>
    </div>
  );
}

export default App;
