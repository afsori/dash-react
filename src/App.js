import Home from "./pages/Home/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ProductList from './organizm/ProductList';
import ProductDetail from "./organizm/ProductDetail";
import Contact from "./pages/Contact";
import Login from "./pages/authPage/Login";
import AuthPageRoute from "./pages/authPage";

// redux
import { connect} from "react-redux";
import Layout from "./pages/Layout";
import Register from "./pages/authPage/Register";
import Parts from "./pages/authPage/Register/Parts";
import Helo from "./pages/authPage/Register/Helo";
import { routes } from "./app-setting/routing";
import ProtectedRoutes from "./app-setting/ProtectedRoutes";

function App(props) {
	const {isLogin} = props;
	console.log('isLogin ', props)

	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="auth/*" element={<AuthPageRoute />}></Route>
					
					{/* <Route path="/" element={<Home/>}></Route> */}
					{routes.map((item, index) =>{
						let layout = item.isLayout ? <Layout>{item.component}</Layout> : item.component
						return <Route key={index} path={item.path} element={<ProtectedRoutes>{layout}</ProtectedRoutes>}/>
					})}

					{/* <Route path="/" element={<Layout />}>
						{routes.map((item, index) => {
							return <Route index={item.index} path={item.path} element={item.component} key={index}></Route>
						})}
					</Route> */}
				</Routes>
			</Router>
		</div>
	);
}

const mapStateToProps = (state) => ({
	isLogin: state.authType.isLogin
})

export default connect(mapStateToProps, null)(App);
