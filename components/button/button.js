import wcButtonStyles from './button.styles.js';
import wcButtonTemplate from './button.template.js';
import BaseComponent from '../core/base-component.js';


export class WCButton extends BaseComponent {
  DEFAULT_CLASSNAME = 'button';
  
  constructor() {
    super();
    this._attrButton = {
      text: '',
      icon: '',
      disabled: false,
      className: this.DEFAULT_CLASSNAME
    }
    this.componentCsss = wcButtonStyles;
    this.componentTemplate = wcButtonTemplate(this._attrButton);
  }

  static get observedAttributes () {
    return ['text', 'icon'];
  }

  attributeChangedCallback (attrName, oldValue, newValue) {
    if(oldValue !== newValue) {
      this._attrButton[attrName] = newValue;
      this.componentTemplate = wcButtonTemplate(this._attrButton);
      this.render();
    }
  }
}