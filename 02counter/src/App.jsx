import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  const addValue = () =>
  {
    if(counter < 20){
    setCounter(counter + 1)
  }
}

  const substractValue = () => 
  {
    if(counter > 0 ){
    setCounter(counter - 1)
  }
  }
  return (
    <>
      <h1>Hello World</h1>
      <button onClick={addValue}>add value{counter}</button>
      <br />
      <button onClick={substractValue}>substract value{counter}</button>
    </>
  )
}

export default App
