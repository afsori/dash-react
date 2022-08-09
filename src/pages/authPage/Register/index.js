import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Login from '../Login';
import Helo from './Helo';
import Parts from './Parts';


function Register() {
  return (
    <div>
      Register
      <Link to="/contact">contact</Link>
  		    <Routes>
            <Route path='/auth'>
              <Route path="parts" element={<Parts/>}></Route>
              <Route path="helo" element={<Helo/>}></Route>
            </Route>
          </Routes>
    </div>
  )
}

export default Register