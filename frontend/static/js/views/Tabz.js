import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(params){
        super(params);
        this.setTitle("Tabz");
    }

    async getHtml(){
        return `
        <div class="view-title" id="tabz-title">
          <h1>Edit the Tuning</h1>
        </div>

      <section class="input-section">


      
      <div class="tuning-div">
        <select id="selectTuning" name="selectTuning" onchange="changeDefault()">
          <option value="Default"> E Tuning </option>
          <option value="Eb Tuning"> Eb Tuning</option>
          <option value="D Tuning"> D Tuning</option>
          <option value="C Tuning"> C Tuning</option>
          <option value="Drop D"> Drop D</option>
        </select>

        <div class="tuning-box">
        <button id="tone">0</button>
        <span id="string1">E</span>
        <span id="string2">A</span>
        <span id="string3">D</span>
        <span id="string4">G</span>
        <span id="string5">B</span>
        <span id="string6">E</span>
    


        </div>
        <div class="tuning-buttons">
        <button type="button" class="btn" id="dropButton" onclick="drop()">Drop</button>
          <button type="button" class="btn" id="resetButton" onclick="setDefault()">Reset</button>
        </div>
        </div>

      </div>


      <div>
        <textarea id="tabInput" placeholder="Insert a Tab here" class="tab"></textarea>
      </div>
      <div class="main-buttons-div">
        <button type="button" class="main-button" onclick="minus()">-</button>
        <button type="button" class="main-button" onclick="plus()">+</button>
      </div>
      </section>
        <br>
        <section class="output-section">
          <div id="outputDiv" class="tab">
          <!-- Este elemento será preenchido com o conteúdo gerado -->
          </div>
        </section>

        <section>
        <div class="action-buttons-div">
        <button id="copy-button" onclick="copyText()">
          <i class="fa-regular fa-file"></i>
        </button>
        <button id="favorite-button" onclick="popInput('open')">
          <i class="fa-regular fa-star"></i>
        </button>
        <button type="button" id="tabz-file-button">
        <i class="fa-regular fa-save"></i>
        </button>
      </div>
    </section>

    <div class="saveContainer">
    <form id="saveForm">
      <label for="name">Riff Name</label><br>
      <input type="text" id="tabName"><br>
      <label for="favoriteCheckbox" id="favoriteLabel">Favorite</label><br>
        <input type="checkbox" id="favoriteFormCheckbox" name="favorite">
      <button type="button" id="popSaveButton" onclick="filesPopUp('open', true)">Save</button>
    </form>
    </div>
  
  <div class="files-pop-div">
    <div class="relative-pop-div">
      <button type="button" class="close-button" onclick="filesPopUp('close')">X</button>
      <div class="filesPopUp">
        <h3> Escolha uma pasta para salvar</h3>
        <div id="pop-files-container">
        </div>
      </div>
    </div>
  </div>  

    <div class="popInput">
    <span>Insert the riff name</span>
    <textarea class="input" id="favoriteRiffName"></textarea>
    <button type="button" id="popSaveButton" onclick="favorite()">Save</button>
</div>
    `;
}

  async load(){
    tabzEvents();
  }

}