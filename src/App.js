import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [num, setNum] = useState(0)

  const handleIncrement = () =>{
    setNum(num+1)
  }

  const handleDecrement = () =>{
    setNum(num-1)
  }

  return (
    <div className="App">
      
        <h3>Count: {num}</h3>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>

    </div>
  );
}

export default App;
