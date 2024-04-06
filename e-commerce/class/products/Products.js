import LocalStorage from "../localStorage/LocalStorage.js";
import AddToCart from "./cards/AddToCart.js";
import Cards from "./cards/Cards.js";
import CartInfo from "./cartInfo/CartInfo.js";
import Categories from "./categories/Categories.js";

class Products {
  constructor() {
    this.productsContainer = document.querySelector(".products-container");
    this.localStorage = new LocalStorage();
    this.categories = new Categories();
    this.cartList = new AddToCart();
    this.cartInfo = new CartInfo();
  }

  createContainer() {
    const cardsContainer = document.createElement("div");
    cardsContainer.classList.add("cards-container");
    const categoriesContainer = document.createElement("div");
    categoriesContainer.classList.add("categories-container");
    this.productsContainer.append(categoriesContainer, cardsContainer);
  }

  loadCategories() {
    window.addEventListener("DOMContentLoaded", async () => {
      const response = await fetch("https://fakestoreapi.com/products/categories", {
        method: "GET",
      });
      const data = await response.json();

      this.categories.createCategories(data);
    });
  }
  loadCards() {
    window.addEventListener("DOMContentLoaded", async () => {
      const response = await fetch("https://fakestoreapi.com/products", { method: "GET" });

      const data = await response.json();
      const cards = new Cards();
      cards.createCards(data);
    });
  }

  cartInfoLoad() {
    window.addEventListener("DOMContentLoaded", () => {
      const data = this.localStorage.getLocalStorage("store") || [];
      this.cartInfo.createCartInfo(data);
      this.cartList.addToCartList.push(data);
    });
  }
}

export default Products;

const products = new Products();
products.createContainer();
products.loadCategories();
products.loadCards();
products.cartInfoLoad();
