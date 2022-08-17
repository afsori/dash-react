import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtectedRoutes({children}) {
  let TokenUser = localStorage.getItem('token')

    if (!TokenUser) {
      return <Navigate to="/auth/login" replace />;
    }
  
    return children;
}



export default ProtectedRoutes