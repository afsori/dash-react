import { Routes, Route, Outlet } from "react-router-dom";
import Login from "./Login";

const AuthPageRoute = () =>{
	console.log('jalans')

  return (
    <div className="home_content">
      <Outlet/>
      		{/* <Routes>
					<Route path="login" element={<Login />}></Route>
          </Routes> */}
    </div>
    
  )
}

export default AuthPageRoute;