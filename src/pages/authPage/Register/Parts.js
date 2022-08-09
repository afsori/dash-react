import React from 'react'
import { Routes, Route, Link } from "react-router-dom";

function Parts() {
  return (
    <div>Parts
      <Link to="/auth/helo">to hello</Link>
    </div>
  )
}

export default Parts