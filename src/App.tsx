import { useState } from 'react'
import haibara from '/haibara.ico'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://blog.skyhaibara.top" target="_blank">
          <img src={haibara} className="logo" alt="skyhaibara" />
        </a>
      </div>
      <h1>skyhaibara</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
