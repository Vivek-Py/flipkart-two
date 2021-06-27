import React from "react";

const Header = (props) => {
	const { setviewMode } = props;
	return (
		<nav className="navbar px-3" role="navigation" aria-label="main navigation">
			<div className="navbar-brand">
				<a
					className="navbar-item has-text-white"
					href="/"
					onClick={(e) => {
						e.preventDefault();
						setviewMode(0);
					}}
				>
					Flipkart
				</a>
				<a
					role="button"
					className="navbar-burger"
					aria-label="menu"
					aria-expanded="false"
					data-target="navbarBasicExample"
					href="/"
				>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>

			<div id="navbarBasicExample" className="navbar-menu">
				<div className="navbar-start"></div>

				<div className="navbar-end">
					<div className="navbar-item">
						<div className="buttons">
							<a
								href="/"
								className="button button-blue"
								onClick={(e) => {
									e.preventDefault();
									setviewMode(2);
								}}
							>
								<span class="icon-text">
									<span class="icon">
										<i id="cart-icon" class="fas fa-shopping-cart"></i>
									</span>
									<span>Cart</span>
								</span>
							</a>
							<a
								href="/"
								className="button button-blue"
								onClick={(e) => {
									e.preventDefault();
									setviewMode(1);
								}}
							>
								<span class="icon-text">
									<span class="icon">
										<i id="cart-icon" class="fas fa-heart"></i>
									</span>
									<span>Wishlist</span>
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
