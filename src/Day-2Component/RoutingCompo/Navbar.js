import React from 'react'
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import Home from './Home';
import Student from './Student';
import Contact from './Contact';
import User from './User';
function Navbar() {
  return (
    <>
      <BrowserRouter>
         <div className='navbar'>
         <NavLink className="Removeline" to="/" style={({isActive})=>{return  isActive?{color:"red"}:{color:"White"}}}>Home</NavLink>
         <NavLink className="Removeline" to="/student" style={({isActive})=>{return isActive?{color:"red"}:{color:"White"}}}>Student</NavLink>
         <NavLink className="Removeline" to="/contact" style={({isActive})=>{return isActive?{color:"red"}:{color:"White"}}}>ContactUs</NavLink>
         </div>
         <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/student' element={<Student/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/user/:id' element={<User/>} />
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default Navbar
