import { useState } from 'react'
import {  useNavigate } from 'react-router'

const Home = () => {
    const [count, setCount] = useState<number>(0)
    const navigate = useNavigate()

    return (
        <div className="header">
            <a
                href="https://blog.skyhaibara.top"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={'/haibara.ico'} className="logo" alt="skyhaibara" />
            </a>
            <h1>skyhaibara</h1>
            <div className="card">
                <button onClick={() => setCount((prev) => prev + 1)}>
                    count is {count}
                </button>
            </div>
            <div className="nav-buttons">
                <button onClick={() => navigate('/')}>Go to Home</button>
                <button onClick={() => navigate('/about')}>Go to About</button>
                <button onClick={() => navigate('/contact')}>
                    Go to Contact
                </button>
            </div>
        </div>
    )
}

export default Home
