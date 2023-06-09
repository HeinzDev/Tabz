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

    <div class="PopContainer">
       <div class="PopButtonDiv">
           <button type="button" id="deleteButton" class="popButtonDelete">
           <i class="fa-solid fa-trash"></i>
           </button>
       </div>

    </div>


        <div class="riff-container">
            <div class="riff-view">
                <h1 class="riff-name"></h1>
                <h4 class="riff-tuning"></h4>
                <div class="riff-tab-container">
                    <h3 class="riff tab"></h3>
                </div>
                <button type="button" onclick="closeRiffView()" id="closeButton">
                <i class="fa-solid fa-xmark"></i>
                </button>
            <div>
        </div>

        `;
    }

    async load() {
        getFavorites(); // Chamada da função que gera os cards
        favoriteEvents();
    }
}