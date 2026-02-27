import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="app">
      <h1>Hello123!</h1>
      <div className="time">
        {currentTime.toLocaleTimeString()}
      
      </div>
      <div className="date">
        {currentTime.toLocaleDateString()}
      </div>
    </div>
  )
}

export default App
