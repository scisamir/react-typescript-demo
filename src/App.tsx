import React from 'react'
import './App.css'
import { Button } from './components/Button'
import { Input } from './components/Input'


function App() {
  return (
    <>
      <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id)
        }}
      />
      <Input value="" handleChange={event => console.log(event)} />
    </>
  )
}

export default App
