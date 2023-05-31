import React from 'react'
import './App.css'
import { Private } from './components/auth/Private'
import { Profile } from './components/auth/Profile'

function App() {
  return (
    <>
      <Private isLoggedIn component={Profile} />
    </>
  )
}

export default App
