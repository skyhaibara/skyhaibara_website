import { useState, useCallback } from 'react'
import { RouterProvider } from 'react-router'
import './App.css'
import router from './router'
import LoadingScreen from './components/LoadingScreen'

const App = () => {
    const [loaded, setLoaded] = useState(false)
    const handleDone = useCallback(() => setLoaded(true), [])

    return (
        <>
            {!loaded && <LoadingScreen onDone={handleDone} />}
            <RouterProvider router={router} />
        </>
    )
}

export default App
