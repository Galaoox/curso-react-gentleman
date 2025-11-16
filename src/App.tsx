import { useState } from 'react'
import './App.css'
import { Button } from './components'


function App() {
  const [count, setCount] = useState(0)

  const countMore = () => {
    setCount(count + 1)
  }

  return (
    <>
      <Button label={`Count ${count}`} parentMethod={countMore} />

    </>
  )
}

export default App
