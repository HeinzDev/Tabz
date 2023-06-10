import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(params){
        super(params);
        this.setTitle("Saved");
    }

    async getHtml(){
        return `
        <div class="view-title">
            <h1 class="title">Saved</h1>
        </div>

        <div id="files-container"></div>




       <section class="PopContainer">
       <div class="formContainer">
       <form id="fileForm">
         <label for="name">Nome da Pasta</label><br>
         <input type="text" id="fileName"><br>
         <button type="submit" id="createButton">Create</button>
       </form>
       </div>
     
       <div class="PopButtonDiv">
           <button type="button" id="fileButton" class="PopButton">
           <i class="fa-solid fa-plus"></i>
           </button>
       </div>
     </section>
       
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
        getPastas(); // Chamada da função que gera os cards
        SavedEvents();
    }
}