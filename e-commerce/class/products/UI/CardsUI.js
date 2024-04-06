class CardsUI {
  constructor() {}

  cardUI(card) {
    let result = `
		<li class="li-cards">
				<div class="image-container">	<img src=${card.image} >
				</div>
				<div class="description-container">${card.title}</div>
				<div class="rating-container">${card.rating.rate}</div>
				<div class="stock-container">2</div>
				<div class="price-container">${card.price}</div>
		
		`;

    return result;
  }
}

export default CardsUI;
