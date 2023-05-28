import React from 'react'
import './App.css'
import { Button } from './components/Button'


function App() {
  return (
    <>
      <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id)
        }}
      />
    </>
  )
}

export default App
