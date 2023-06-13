import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(params){
        super(params);
        this.setTitle("Tabz");
    }

    async getHtml(){
        return `

      <section class="input-section">
      <div class="main-title">
      <h1>Edit the Tuning</h1>
      </div>
      
      <div class="tuning-div">
        <div class="tuning-box">
        <button id="tone">0</button>
        <span id="string1">E</span>
        <span id="string2">A</span>
        <span id="string3">D</span>
        <span id="string4">G</span>
        <span id="string5">B</span>
        <span id="string6">E</span>
    
        <label for="selectTuning"></label>
        <select id="selectTuning" name="selectTuning" onchange="changeDefault()">
          <option value="Default"> E Tuning</option>
          <option value="D Tuning">D Tuning</option>
          <option value="C Tuning">C Tuning</option>
          <option value="Drop D">Drop D</option>
        </select>

        </div>
        <div class="tuning-buttons">
        <button type="button" class="btn" id="dropButton" onclick="drop()">Drop</button>
          <button type="button" class="btn" id="resetButton" onclick="setDefault()">Reset</button>
        </div>
        </div>

      </div>


      <div>
        <textarea id="tabInput" placeholder="Insert a Tab here"></textarea>
      </div>
      <div class="main-buttons-div">
        <button type="button" class="main-button" onclick="minus()">-</button>
        <button type="button" class="main-button" onclick="plus()">+</button>
      </div>
      </section>
        <br>
        <section class="output-section">
          <div id="outputDiv">
          <!-- Este elemento será preenchido com o conteúdo gerado -->
          </div>
        </section>

        <section>
          <div class="action-buttons-div">
            <button id="file-button" onclick="copyText()">
              <i class="fa-regular fa-file"></i>
            </button>
            <button id="favorite-button" onclick="popInput('open')">
              <i class="fa-regular fa-star"></i>
            </button>
            <button type="button" id="copy-button" onclick="openFiles()">
            <i class="fa-regular fa-save"></i>
            </button>
          </div>
        </section>

        <div class="popInput">
        <span>Insert the riff name</span>
        <textarea class="input" id="favoriteRiffName"></textarea>
        <button type="button" id="popSaveButton" onclick="favorite()">Save</button>
    </div>
        `;
    }
}