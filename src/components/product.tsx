interface ProductProps {
	product: {
		id: string;
		name: string;
		price: number;
		image: string;
	};

	onAdd: (product: { id: string; name: string; price: number; image: string }) => void;
}

const Product = ({ product, onAdd }: ProductProps) => {
	return (
		<div>
			<img src={product.image} alt={product.name} className="small" />
			<h3>{product.name}</h3>
			<p>${product.price}</p>
			<div>
				<button onClick={() => onAdd(product)}>Add To Cart</button>
			</div>
		</div>
	);
};

export default Product;
