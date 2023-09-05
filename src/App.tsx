import { useState } from 'react';

import data from './data';

import Header from './components/header';
import Main from './components/main';
import Basket from './components/basket';

interface Product {
	id: string;
	name: string;
	price: number;
}

interface CartItem extends Product {
	qty: number;
}

function App() {
	const [cartItems, setCartItems] = useState<CartItem[]>([]);

	const { products } = data;

	const onAdd = (product: Product) => {
		const exist = cartItems.find((x) => x.id === product.id);

		if (exist) {
			setCartItems(
				cartItems.map((x) => (x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x))
			);
		} else {
			setCartItems([...cartItems, { ...product, qty: 1 }]);
		}
	};

	const onRemove = (product: Product) => {
		const exist = cartItems.find((x) => x.id === product.id);

		if (!exist) return;

		if (exist.qty === 1) {
			setCartItems(cartItems.filter((x) => x.id !== product.id));
		} else {
			setCartItems(
				cartItems.map((x) => (x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x))
			);
		}
	};

	return (
		<div>
			<Header countCartItems={cartItems.length} />
			<div className="row">
				<Main products={products} onAdd={onAdd} />
				<Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
			</div>
		</div>
	);
}

export default App;
