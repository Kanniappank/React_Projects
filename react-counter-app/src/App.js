
import './App.css';
import react,{ useState }from 'react'

let counter = 0
function App() {
  let [counter,setcounter] = useState(0);
  let incrementHandler = () =>{
    setcounter(counter+1)
    console.log(counter)
  }
  let decrementHandler = () =>{
    setcounter(counter-1)
    console.log(counter)
  }
  let resetHandler = () =>{
    setcounter(0)
    console.log(counter)
  }
  return (
    <div className='App'> 
        <h1 className='title'>React counter App</h1>
        <h1 className='counter'>{counter}</h1>
        <button className='btn' onClick={decrementHandler}>Decrement</button>
        <button className='btn' onClick={incrementHandler}>Increment</button>
        <button className='btn' onClick={resetHandler}>Reset</button>
    </div>
  );
}

export default App;
