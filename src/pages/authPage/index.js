import { Routes, Route, Outlet, Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

const AuthPageRoute = () =>{
	console.log('jalans')

  return (
    <div className="auth_page">
            {/* <Link to="register">register</Link>
            <Link to="login">login</Link> */}
      {/* <Outlet/> */}
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
    
  )
}

export default AuthPageRoute;