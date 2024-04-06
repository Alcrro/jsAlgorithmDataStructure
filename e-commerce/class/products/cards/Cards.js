import CardsUI from "../UI/CardsUI.js";
import AddToCart from "./AddToCart.js";

class Cards extends CardsUI {
  constructor() {
    super();
    this.productsContainer = document.querySelector(".products-container");
    this.cardInner = new CardsUI();
    this.addToCart = new AddToCart();
  }

  #createContainerCards() {
    let cardContainer = `
	
			<div class="cards">
				<ul class="ul-cards">		
				</ul>
			</div>
		</div>
		</li>
		`;
    return cardContainer;
  }

  createCard(card) {
    const ulCards = document.querySelector(".ul-cards");
    const cardUI = this.cardInner.cardUI(card);
    ulCards.insertAdjacentHTML("beforeend", cardUI);
    const liCards = document.querySelectorAll(".li-cards");
    const buttonContainer = document.createElement("div");
    liCards.forEach((elements) => elements.append(buttonContainer));
    buttonContainer.classList.add("button-container");
    const button = document.createElement("button");
    button.classList.add("btn", "add-to-cart");
    button.innerHTML = "Add to cart";
    buttonContainer.append(button);
    button.onclick = () => this.addToCart.addToCart(card);
  }

  createCards(products) {
    const cardsContainer = document.querySelector(".cards-container");

    cardsContainer.insertAdjacentHTML("beforeend", this.#createContainerCards());
    products.forEach((card, index) => {
      this.createCard(card, index);
    });
  }
}

export default Cards;
