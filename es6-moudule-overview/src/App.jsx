import { useEffect, useState } from 'react'
import './App.css'
import Watch from './components/Watch/Watch'
function App() {
  const [watches,setWatches]=useState([]);
useEffect(()=>{
  fetch('watches.json')
  .then(res=>res.json())
  .then(data=>setWatches(data))
},[])
// const watches=
//   [
//     {
//       "id": 1,
//       "name": "Jason X Series Pro",
//       "price": "$199.99"
//     },
//     {
//       "id": 2,
//       "name": "Jason Fit Ultra",
//       "price": "$249.99"
//     },
//     {
//       "id": 3,
//       "name": "Jason Elegance Classic",
//       "price": "$349.99"
//     },
//     {
//       "id": 4,
//       "name": "Jason Gym Master",
//       "price": "$179.99"
//     },
//     {
//       "id": 5,
//       "name": "Jason Adventure Explorer",
//       "price": "$299.99"
//     }
//   ]
  
  return (
    <>
     
      <h1>Vite + React</h1>
      {
        watches.map(watch=><Watch key={watch.id} watch={watch}>



        </Watch>)
      }
    </>
  )
}

export default App
