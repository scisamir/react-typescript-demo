import React from 'react'
import './App.css'
import { RandomNumber } from './components/restriction/RandomNumber'

function App() {
  return (
    <>
      <RandomNumber value={10} isPositive />
    </>
  )
}

export default App
