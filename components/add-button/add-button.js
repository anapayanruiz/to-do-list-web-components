import AddButtonStyles from './add-button.styles.js';
import AddButtonTemplate from './add-button.template.js';
import BaseComponent from '../core/base-component.js';

export class AddButton extends BaseComponent {
  constructor() {
    super();
    this.componentCsss = AddButtonStyles;
    this.componentTemplate = AddButtonTemplate;
  }
}

window.customElements.define('add-button', AddButton);