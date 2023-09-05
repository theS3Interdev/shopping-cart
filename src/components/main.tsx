import Product from './product';

interface MainProps {
	products: Array<{
		id: string;
		name: string;
		price: number;
		image: string;
	}>;

	onAdd: (product: { id: string; name: string; price: number; image: string }) => void;
}

const Main = ({ products, onAdd }: MainProps) => {
	return (
		<main className="block col-2">
			<h2>Products</h2>
			<div className="row">
				{products.map((product) => (
					<Product key={product.id} product={product} onAdd={onAdd} />
				))}
			</div>
		</main>
	);
};

export default Main;
