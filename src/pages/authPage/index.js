import { Routes, Route, Outlet, Link } from "react-router-dom";
import Login from "./Login";

const AuthPageRoute = () =>{
	console.log('jalans')

  return (
    <div className="home_content">
            {/* <Link to="register">register</Link>
            <Link to="login">login</Link> */}
      <Outlet/>
      		{/* <Routes>
					<Route path="login" element={<Login />}></Route>
          </Routes> */}
    </div>
    
  )
}

export default AuthPageRoute;