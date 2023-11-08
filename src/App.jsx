import { useState, Fragment } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)
  const numbers = [1, 2, 3]

  return (
    <Fragment>
      <>
        <h1>Hello, Everyone</h1>
        <div>
          {numbers.map((num, index)=>(
            <Fragment key={index}>
              {num}
            </Fragment>))}
        </div>
      </>
    </Fragment>
  )
}

export default App
