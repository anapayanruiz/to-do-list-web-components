import "../input/index.js";
import "../button/index.js";
import BaseComponent from "../core/base-component.js";
import todoListStyles from "./todo-list.styles.js";
import todoListTemplate from "./todo-list.template.js";

export class TodoList extends BaseComponent {
    constructor() {
        super();
        this.componentCsss = todoListStyles;
        this.componentTemplate = todoListTemplate;
    }
}

window.customElements.define("todo-list", TodoList);