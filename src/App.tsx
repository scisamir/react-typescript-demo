import React from 'react'
import './App.css'
import { Text } from './components/polymorphic/Text'

function App() {
  return (
    <>
      <Text as='h1' size='lg'>
        Heading
      </Text>
      <Text as='p' size='md'>
        Paragraph
      </Text>
      <Text as='label' htmlFor='someId' size='sm' color='secondary'>
        Label
      </Text>
    </>
  )
}

export default App
