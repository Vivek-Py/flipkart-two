import React from "react";
import productJson from "../products.json";

let stars = [];

const createRating = (rating) => {
	for (let i = 0; i < rating; i++) {
		stars.push(<i class="fas fa-star"></i>);
	}
};

const discountedPrice = (discount, price) => {
	let discountPrice = Math.trunc((discount / 100) * price);
	return price - discountPrice;
};

const ProductPage = (props) => {
	const { wishlistProduct, setwishlistProduct, cartProduct, setcartProduct } =
		props;
	return (
		<div className="box">
			{productJson.arrayOfProducts.map((product) => {
				return (
					<div className="card">
						<div className="card-image">
							<figure className="image is-4by3">
								<img src={product.imgUrl} alt="Placeholder product" />
							</figure>
							<i
								onClick={() => {
									setwishlistProduct([...wishlistProduct, product.name]);
									console.log("clicked", product.name);
								}}
								id="heart-btn"
								class="far fa-heart"
							></i>
						</div>
						<div className="card-content">
							<div className="media">
								<div className="media-content">
									<p className="title is-4">{product.name}</p>
								</div>
							</div>

							<div className="content">
								{product.desc}
								<br />
								<div id="stars-box">
									{createRating(product.rating)}
									{stars.map((star, index) => {
										if (index === stars.length - 1) {
											stars = [];
										}
										return star;
									})}
								</div>

								<time>
									<p>
										<strong>₹{discountedPrice(product.discount, product.price)}</strong>{" "}
										&nbsp; <strike>{product.price}</strike>&nbsp; {product.discount}% off
									</p>
								</time>
							</div>
							<div className="buttons">
								<a
									href="/"
									className="button is-link"
									id="add-btn"
									onClick={(e) => {
										e.preventDefault();
										setcartProduct([...cartProduct, product.name]);
									}}
								>
									Add to Cart
								</a>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ProductPage;
