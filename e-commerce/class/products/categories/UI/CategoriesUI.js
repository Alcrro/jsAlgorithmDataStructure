class CategoriesUI {
  constructor() {}

  categoryTitleUI(category) {
    let result = `

		<div class="title-category">${category}</div>
			
		</div>	

		`;

    return result;
  }

  categoriesListUI(category) {
    let result = `
			<li class="category"></li>
		`;
    return result;
  }
}

export default CategoriesUI;
