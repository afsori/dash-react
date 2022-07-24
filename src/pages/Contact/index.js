import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../../organizm/Header";
import ContactHeader from "./ContactHeader";
import ContactMenu from "./ContactMenu";

function Contact() {
	<Router>
		<Routes>
			<Route path="/contact-menu" element={<ContactMenu />}></Route>
			<Route path="/contact-header" element={<ContactHeader />}></Route>
		</Routes>
	</Router>;
	return (
		<>
			<Header></Header>
			<nav>
				<Link className="nav-link" to="/contact-menu">
					Contact Menu
				</Link>
				<Link className="nav-link" to="/contact-header">
					Contact header
				</Link>
			</nav>
			Halaman Contact
		</>
	);
}

export default Contact;
