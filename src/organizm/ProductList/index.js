import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { setProducts } from "../../redux/actions/productActions";

function ProductList() {
	const products = useSelector((state) => state.allProduct.products);
	const dispatch = useDispatch();

	console.log("products", products);

	const fectProduct = async () => {
		await axios
			.get("https")
			// await axios.get('https://fakestoreapi.com/products')
			.then((res) => {
				console.log("ress", res.data);
				dispatch(setProducts(res.data));
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		fectProduct();
	}, []);

	const renderList = products.map((item, idx) => {
		return (
			<div className="card col-md-3 me-1 mb-2" key={idx}>
				<img src={item.image} className="w-50 mx-auto card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{item.title}</h5>
					<p className="card-text">{item.category}</p>
					<p className="card-text">{item.price}</p>
					<Link className="btn btn-primary" to={`/product/${item.id}`}>
						Go Detail
					</Link>
					{/* <Link to={`/product/${item.id}`} className='btn btn-primary'>Detail Page</Link> */}
				</div>
			</div>
		);
	});

	return (
		<div className="my-3 row justify-content-between">
			{products.length > 1 ? renderList : <h1>Loading...</h1>}
		</div>
	);
}

export default ProductList;
