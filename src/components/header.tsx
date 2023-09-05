interface HeaderProps {
	countCartItems: number;
}

const Header = ({ countCartItems }: HeaderProps) => {
	return (
		<header className="row block center">
			<div>
				<a href="/">
					<h1>React Shopping Cart</h1>
				</a>
			</div>

			<div>
				<a href="#">
					Cart {countCartItems ? <button className="badge">{countCartItems}</button> : ''}
				</a>{' '}
				<a href="#">Sign In</a>
			</div>
		</header>
	);
};

export default Header;
