import React from 'react'
import {Link} from "react-router-dom"
import "./style/style.css"


export default function Nav() {
  return (
    <div className='navbar'>
        <div id='links'>
            <Link id='kal' to='/'>Kalvium ❤️</Link>
            <Link className='link-style' to='/Contacts'>Contacts</Link>
            <Link className='link-style' to='/Form'>Registration form</Link>
        </div>

    </div>
  )
}
