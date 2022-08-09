import React from 'react'
import { Routes, Route, Link } from "react-router-dom";

function Helo() {
  return (
    <div>Helo

      <Link to="/auth/parts">to Parts</Link>
    </div>
  )
}

export default Helo