import { useState } from 'react'

import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AllRoute from './Components/Allroutes'
import Nav from './Components/Nav'



function App() {
 

  return (
    <>
    <BrowserRouter>
      <Nav/>
      <AllRoute/>
      
      
    </BrowserRouter>
     
    </>
  )
}

export default App


