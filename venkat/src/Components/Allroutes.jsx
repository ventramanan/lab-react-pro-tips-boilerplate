import React from 'react'
import {Routes,Route,} from "react-router-dom"
import Contacts from './Contacts'
import Reg from './Reg'
import Home from './Home'

export default function AllRoute() {
  return (
    <div>
        <Routes>
            <Route path='/Contacts' element={<Contacts/>}></Route>
            <Route path='/Form' element={<Reg/>}></Route>
            <Route path="/" element={<Home/>}></Route>
        </Routes>
    </div>
  )
}