export default class BaseComponent extends HTMLElement {
    constructor() {
        super();
        this.componentCsss = "";
        this.componentTemplate = "";
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    templateCSS() {
        return this.componentCsss;
    }
    
    template() {
        return this.componentTemplate;
    }

    render() {
        this.shadowDOM.innerHTML = `
            ${this.templateCSS()}
            ${this.template()}    
        `;
    }

    connectedCallback() {
        this.render();
    }
}