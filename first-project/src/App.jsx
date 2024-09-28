import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let  [counter, setCounter] = useState(0);
 let addValue = ()=>{
    setCounter(counter+1)
  }
  let removeValue = ()=>{
    setCounter(counter-1)
  }


  return (
    <>
     <h1>Counter Project </h1>
     <button onClick={addValue}>Add</button> 
     <h2>Counter value {counter}</h2>
     <button onClick={removeValue}>Remove</button>
    </>
  )
}

export default App
