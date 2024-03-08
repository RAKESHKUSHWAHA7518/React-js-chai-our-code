import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

   let [counter,setCounter] =useState(15)
   
   

   const addvalue = ()=>{
  
     counter = counter + 1
     setCounter(counter)
   }

   const removevalue = ()=>{
  
    counter = counter - 1
    setCounter(counter)
  }


   



  return (
    <>
      <h1> chai our react</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addvalue}>Add Value</button><br></br>
      <button onClick={removevalue}>Decreas value</button>
    </>
  )
}

export default App
