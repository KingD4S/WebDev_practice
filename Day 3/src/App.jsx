import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Routing from './Utils/Routing.jsx'
const App = () => {
  return (
    <>
      <Nav />
      <Routing />
    </>
  )
}

export default App