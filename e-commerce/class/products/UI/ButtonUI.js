class ButtonUI {
  constructor() {}

  ButtonUI({ class1, description }) {
    let result = `
		<div class="button-container ${class1}">
			<button class="btn ${class1}">${description}</button>
		</div>
		`;

    return result;
  }
}

export default ButtonUI;
