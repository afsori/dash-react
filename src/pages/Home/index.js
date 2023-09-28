import React from "react";
import { Outlet } from "react-router-dom";
import ProductList from "../../organizm/ProductList";
import Header from "../../organizm/Header";
import Sidebar from "../../organizm/Sidebar";

import '../../assets/scss/home.scss'

import { useStoreZustand } from "../../zustand";

function Home() {
	const {count, increaseCount, resetCount} = useStoreZustand();

	const Sum = (a, b) => {
		return a + b;
	}
	return (
		<>
			{/* <Header></Header> */}
			{/* <Sidebar></Sidebar> */}
			{/* <ProductList></ProductList>; */}
			<div className="home_content" data-testid="home_content">
				<div className="text"> Home Content</div>
				<p>{count}</p>
				<button onClick={increaseCount}>Klik Disini</button>
				<button onClick={resetCount}>Reset Count</button>
				{/* <Outlet/> */}
			</div>
		</>
	);
}

export default Home;
