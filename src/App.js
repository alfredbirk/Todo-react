import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Item } from './Item';
import { Todo } from './Todo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Todo />
      </header>
    </div>
  );
}

export default App;
