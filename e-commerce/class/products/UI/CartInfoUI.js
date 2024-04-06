class CartInfoUI {
  constructor() {}

  cartInfoUI(length) {
    let result = `
		<div class="products-number-container">
			<div class="products-number">${length}</div>
		</div>
			`;

    return result;
  }
}

export default CartInfoUI;
