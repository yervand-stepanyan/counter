import React from 'react';
import Counter from './Components/Counter/Counter';
import './App.css';

function App() {
  return (
      <div className="App">
        <Counter initialCount={0}/>
      </div>
  );
}

export default App;