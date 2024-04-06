import CategoriesUI from "./UI/CategoriesUI.js";

class Categories extends CategoriesUI {
  constructor() {
    super();
    this.productsContainer = document.querySelector(".products-container");
  }

  createCategories(categories) {
    let catCont = document.querySelector(".categories-container");

    categories.forEach((elements) => {
      const cateDiv = document.createElement("div");
      cateDiv.classList.add("category");
      cateDiv.innerHTML += super.categoryTitleUI(elements);
      catCont.prepend(cateDiv);
    });
  }
}
export default Categories;
