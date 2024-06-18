import BaseComponent from "../core/base-component.js";
import DeleteButtonStyles from "./delete-button.styles.js";
import DeleteButtonTemplate from "./delete-button.template.js";


export class DeleteButton extends BaseComponent {
    constructor() {
        super();
        this.componentCsss = DeleteButtonStyles;
        this.componentTemplate = DeleteButtonTemplate;
    }
}

window.customElements.define("delete-button", DeleteButton);