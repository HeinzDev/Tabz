import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(params){
        super(params);
        this.setTitle("Saved");
    }

    async getHtml(){
        return `
        <div class="view-title">
            <h1>Saved</h1>
        </div>

        <div id="files-container"></div>

       <link rel="stylesheet" href="../static/CSS/saved.css">  

        `;
    }

    async load() {
        getPastas(); // Chamada da função que gera os cards
    }
}