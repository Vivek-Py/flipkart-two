import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import ProductPage from "./components/ProductPage";
import WishlistPage from "./components/WishlistPage";
import CartProduct from "./components/CartProduct";

function App() {
	const [wishlistProduct, setwishlistProduct] = useState([]);
	const [cartProduct, setcartProduct] = useState([]);
	const [viewMode, setviewMode] = useState(0);
	return (
		<div className="App">
			<Header viewMode={viewMode} setviewMode={setviewMode} />
			{viewMode === 0 ? (
				<ProductPage
					cartProduct={cartProduct}
					setcartProduct={setcartProduct}
					wishlistProduct={wishlistProduct}
					setwishlistProduct={setwishlistProduct}
				/>
			) : viewMode === 1 ? (
				<WishlistPage
					wishlistProduct={wishlistProduct}
					setwishlistProduct={setwishlistProduct}
					cartProduct={cartProduct}
					setcartProduct={setcartProduct}
				/>
			) : viewMode === 2 ? (
				<CartProduct
					cartProduct={cartProduct}
					setcartProduct={setcartProduct}
					wishlistProduct={wishlistProduct}
					setwishlistProduct={setwishlistProduct}
				/>
			) : (
				""
			)}
		</div>
	);
}

export default App;
