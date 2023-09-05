interface BasketProps {
	cartItems: Array<{
		id: string;
		name: string;
		qty: number;
		price: number;
	}>;

	onAdd: (product: { id: string; name: string; price: number }) => void;

	onRemove: (product: { id: string; name: string; price: number }) => void;
}

const Basket = ({ cartItems, onAdd, onRemove }: BasketProps) => {
	const itemPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
	const tax = itemPrice * 0.16;
	const shippingCost = itemPrice > 4000 ? 0 : 20;
	const totalCost = itemPrice + tax + shippingCost;

	return (
		<aside className="block col-1">
			<h2>Cart Items</h2>
			<div>
				{cartItems.length === 0 && <div>The cart is empty...</div>}

				{cartItems.map((item) => (
					<div key={item.id} className="row">
						<div className="col-2">{item.name}</div>
						<div className="col-2">
							<button onClick={() => onRemove(item)} className="remove">
								-
							</button>{' '}
							<button onClick={() => onAdd(item)} className="add">
								+
							</button>
						</div>

						<div className="col-2 text-right">
							{item.qty} x ${item.price.toFixed(2)}
						</div>
					</div>
				))}

				{cartItems.length !== 0 && (
					<>
						<hr></hr>
						<div className="row">
							<div className="col-2">Item Price</div>
							<div className="col-1 text-right">${itemPrice.toFixed(2)}</div>
						</div>
						<div className="row">
							<div className="col-2">VAT</div>
							<div className="col-1 text-right">${tax.toFixed(2)}</div>
						</div>
						<div className="row">
							<div className="col-2">Shipping Cost</div>
							<div className="col-1 text-right">${shippingCost.toFixed(2)}</div>
						</div>

						<div className="row">
							<div className="col-2">
								<strong>Total Cost</strong>
							</div>
							<div className="col-1 text-right">
								<strong>${totalCost.toFixed(2)}</strong>
							</div>
						</div>
						<hr />
						<div className="row">
							<button onClick={() => alert('Implement Checkout!')}>Checkout</button>
						</div>
					</>
				)}
			</div>
		</aside>
	);
};

export default Basket;
