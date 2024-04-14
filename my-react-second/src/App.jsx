import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import User from './User'
import Friends from './Friends'

function App() {
  const [count, setCount] = useState(0)
  function handleClick() {
    alert('button clicked')
  }
  const handleClick2=()=>{
    alert('button 2')
  }
  const addToFive=(num)=>{
    alert(num+5)
  }
  return (
    <>
      <h1>React Core Conceps 2</h1>
      <Friends></Friends>
      <User></User>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={()=>{alert('third clicked')}}>Click 3</button>
      <button onClick={()=>{addToFive(5)}}>Click 4</button>
      

    </>
  )
}

export default App
