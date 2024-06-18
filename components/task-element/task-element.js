import BaseComponent from "../core/base-component.js";
import TaskElementStyles from "./task-element.styles.js";
import TaskElementTemplate from "./task-element.template.js";

export class TaskElement extends BaseComponent {
    constructor() {
        super();
        this.componentCsss = TaskElementStyles;
        this.componentTemplate = TaskElementTemplate;
    }
}

window.customElements.define("task-element", TaskElement);