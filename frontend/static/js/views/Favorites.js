import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(params){
        super(params);
        this.setTitle("Favorites");
    }

    async getHtml(){
        return `
        <div class="view-title">
            <h1>Favorites</h1>
        </div>

        <div id="favorites-container"></div>

       <link rel="stylesheet" href="../static/CSS/saved.css">  

        `;
    }

    async load() {
        getFavorites(); // Chamada da função que gera os cards
    }
}