import Home from "./pages/Home/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ProductList from './organizm/ProductList';
import ProductDetail from "./organizm/ProductDetail";
import Contact from "./pages/Contact";

function App() {
	return (
		<div className="App">
			{/* <ProductList></ProductList> */}
			{/* <ProductDetail></ProductDetail> */}
			<Router>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/product/:id" element={<ProductDetail />}></Route>
					<Route path="/contact" element={<Contact />}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
