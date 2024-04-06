import LocalStorage from "../localStorage/LocalStorage.js";

class Cart {
  constructor() {
    this.localStorage = new LocalStorage();
  }

  loadCart() {
    window.addEventListener("DOMContentLoaded", () => {
      const localData = this.localStorage.getLocalStorage("store");
      console.log(localData);
    });
  }
}

const cart = new Cart();
cart.loadCart();
