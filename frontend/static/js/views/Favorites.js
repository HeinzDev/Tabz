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

        <div class="riff-container">
            <div class="riff-view">
                <h1 class="riff-name"></h1>
                <h3 class="riff"></h3>
                <button type="button" onclick="closeRiffView()" id="closeButton">
                <i class="fa-solid fa-xmark"></i>
                </button>
            <div>
        </div>

        `;
    }

    async load() {
        getFavorites(); // Chamada da função que gera os cards
    }
}