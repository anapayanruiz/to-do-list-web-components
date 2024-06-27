import BaseComponent from "../core/base-component.js";
import wcInputStyles from "./input.styles.js";
import wcInputTemplate from "./input.template.js";

export class WCInput extends BaseComponent {
    constructor() {
        super();
        this.componentCsss = wcInputStyles;
        this.componentTemplate = wcInputTemplate;
    }
}