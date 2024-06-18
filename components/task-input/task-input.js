import BaseComponent from "../core/base-component.js";
import TaskInputStyles from "./task-input.styles.js";
import TaskInputTemplate from "./task-input.template.js";

export class TaskInput extends BaseComponent {
    constructor() {
        super();
        this.componentCsss = TaskInputStyles;
        this.componentTemplate = TaskInputTemplate;
    }
}

window.customElements.define("task-input", TaskInput);