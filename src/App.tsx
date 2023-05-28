import React from 'react'
import './App.css'
import { Greet } from './components/Greet'
import { Heading } from './components/Heading'
import { Oscar } from './components/Oscar'
import { Status } from './components/Status'

function App() {
  return (
    <>
      <Status status="success" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>
      <Greet name="Samir" isLoggedIn={false} />
    </>
  )
}

export default App
