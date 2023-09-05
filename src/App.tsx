import data from './data';

import Header from './components/header';
import Main from './components/main';
import Basket from './components/basket';

function App() {
	const { products } = data;

	const onAdd = () => {};

	//const onRemove = (product) => {};

	return (
		<div>
			<Header />
			<div className="row">
				<Main products={products} onAdd={onAdd} />
				<Basket />
			</div>
		</div>
	);
}

export default App;
