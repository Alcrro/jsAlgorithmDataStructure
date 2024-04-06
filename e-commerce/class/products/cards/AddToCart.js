import LocalStorage from "../../localStorage/LocalStorage.js";
import CartInfo from "../cartInfo/CartInfo.js";

class AddToCart {
  constructor() {
    this.localStorage = new LocalStorage();
    this.cartInfo = new CartInfo();
    this.addToCartList = [];
  }

  addToCart(data) {
    if (!this.addToCartList.length) {
      this.addToCartList.push(data);
      this.localStorage.setLocalStorage("store", this.addToCartList);
      this.cartInfo.createCartInfo(this.addToCartList);
    } else {
      console.log("gg2");
      this.addToCartList.push(data);
      this.localStorage.setLocalStorage("store", this.addToCartList);
      this.cartInfo.createCartInfo(this.addToCartList);
    }
  }

  showCartInfo() {
    return this.addToCartList;
  }
  show() {
    console.log(this.addToCartList);
  }
}

export default AddToCart;
