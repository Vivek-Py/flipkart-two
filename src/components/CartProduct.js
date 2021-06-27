import productJson from "../products.json";

const CartProduct = (props) => {
	const { cartProduct, setwishlistProduct, wishlistProduct } = props;
	return (
		<div className="columns my-3">
			<div className="column is-two-thirds">
				<div className="box">
					{productJson.arrayOfProducts.map((product) => {
						let indexOfProduct = cartProduct.indexOf(product.name);
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
													setwishlistProduct([...wishlistProduct, product.name]);
													let index = cartProduct.indexOf(product.name);
													if (index > -1) {
														cartProduct.splice(index, 1);
													}
												}}
											>
												Move to Wishlist
											</a>
										</div>
									</div>
								</div>
							);
						} else {
							//Do Nothing
							return console.log("Nothing");
						}
					})}
				</div>
			</div>
			<div className="column is-onw-thirds">
				<div className="container">
					<p className="title has-text-centered">My Cart</p>
					<ul className="has-text-centered">
						{productJson.arrayOfProducts.map((product) => {
							let index = cartProduct.indexOf(product.name);
							if (index > -1) {
								/* product.price - Math.trunc((product.discount / 100) * product.price); */
								/* totalPrice.push(); */
								return (
									<li>
										{product.name}&nbsp; X1 &nbsp;₹
										{product.price - Math.trunc((product.discount / 100) * product.price)}
									</li>
								);
							} else {
								return console.log("nothing");
							}
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default CartProduct;
