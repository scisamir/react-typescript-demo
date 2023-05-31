import React from 'react'
import './App.css'
import { CustomButton } from './components/html/Button'

function App() {
  return (
    <>
      <CustomButton
        variant='primary'
        onClick={() => console.log('Clicked')}
      >
        Primary Button
      </CustomButton>
    </>
  )
}

export default App
