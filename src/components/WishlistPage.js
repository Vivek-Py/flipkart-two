import productJson from "../products.json";

const WishlistPage = (props) => {
	const { wishlistProduct, cartProduct, setcartProduct } = props;
	return (
		<div>
			<div className="title p-3 has-text-centered">My Wishlist</div>
			<div className="box">
				{productJson.arrayOfProducts.map((product) => {
					let indexOfProduct = wishlistProduct.indexOf(product.name);
					if (indexOfProduct > -1) {
						return (
							<div className="card">
								<div className="card-image">
									<figure className="image is-4by3">
										<img src={product.imgUrl} alt="Placeholder product" />
									</figure>
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
									</div>
									<div className="buttons">
										<a
											href="/"
											className="button is-link"
											id="add-btn"
											onClick={(e) => {
												e.preventDefault();
												setcartProduct([...cartProduct, product.name]);
												const index = wishlistProduct.indexOf(product.name);
												if (index > -1) {
													wishlistProduct.splice(index, 1);
												}
											}}
										>
											Add to Cart
										</a>
									</div>
								</div>
							</div>
						);
					} else {
						return console.log("Nothing Here");
					}
				})}
			</div>
		</div>
	);
};

export default WishlistPage;
