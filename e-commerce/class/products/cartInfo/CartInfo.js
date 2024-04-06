import CartInfoUI from "../UI/CartInfoUI.js";

class CartInfo extends CartInfoUI {
  constructor() {
    super();
    this.cartIcon = document.querySelector(".cart-icon");
  }

  createCartInfo(list) {
    console.log(list);
    if (list === 0) {
    } else {
      this.cartIcon.insertAdjacentHTML("beforeend", super.cartInfoUI(list.length));
    }
  }
}

export default CartInfo;
