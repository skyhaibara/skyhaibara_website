import { useState, FC } from 'react'
import haibara from '/haibara.ico'
import './App.css'
import { Routes, Route } from 'react-router'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Navbar from './components/navbar'

const App: FC = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <>
      <div className="header">
        <a href="https://blog.skyhaibara.top" target="_blank" rel="noopener noreferrer">
          <img src={haibara} className="logo" alt="skyhaibara" />
        </a>
        <h1>skyhaibara</h1>
        <div className="card">
          <button onClick={() => setCount((prev) => prev + 1)}>
            count is {count}
          </button>
        </div>
      </div>

      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
    </>
  )
}

export default App