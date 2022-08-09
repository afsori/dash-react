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

function App(props) {
	const {isLogin} = props;
	console.log('isLogin ', props)

	return (
		<div className="App">
			<Router>
				<Routes>
					  {/* <Route path="parts" element={<Parts/>}></Route>
              <Route path="helo" element={<Helo/>}></Route> */}
					<Route path="/auth" element={<AuthPageRoute />}>
						<Route path="login" element={<Login />} />
						<Route path="register" element={<Register/>} />
					</Route>
					<Route path="/" element={<Home />}>
						<Route path="product/:id" element={<ProductDetail />}></Route>
						<Route path="contact" element={<Contact />}></Route>
					</Route>
				</Routes>
			</Router>
		</div>
	);
}

const mapStateToProps = (state) => ({
	isLogin: state.authType.isLogin
})

export default connect(mapStateToProps, null)(App);
