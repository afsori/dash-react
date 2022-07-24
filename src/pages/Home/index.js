import React from "react";
import ProductList from "../../organizm/ProductList";
import Header from "../../organizm/Header";
import Sidebar from "../../organizm/Sidebar";

import '../../assets/scss/home.scss'

function Home() {
	return (
		<>
			{/* <Header></Header> */}
			<Sidebar></Sidebar>
			{/* <ProductList></ProductList>; */}
			<div className="home_content">
				<div className="text"> Home Content</div>
			</div>
		</>
	);
}

export default Home;
