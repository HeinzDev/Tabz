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
      <h1>Edit the Tunning</h1>
      </div>
      
      <div class="tunning-div">
        <div class="tunning-box">
        <button id="tone">0</button>
        <span id="string1">E</span>
        <span id="string2">A</span>
        <span id="string3">D</span>
        <span id="string4">G</span>
        <span id="string5">B</span>
        <span id="string6">E</span>
    
        <label for="selectTunning"></label>
        <select id="selectTunning" name="selectTunning" onchange="changeDefault()">
          <option value="Default"> E Tunning</option>
          <option value="D Tunning">D Tunning</option>
          <option value="C Tunning">C Tunning</option>
          <option value="Drop D">Drop D</option>
        </select>

        </div>
        <div class="tunning-buttons">
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
            <button id="favorite-button" onclick="favorite()">
              <i class="fa-regular fa-star"></i>
            </button>
            <button type="button" id="copy-button" onclick="openFiles()">
            <i class="fa-regular fa-save"></i>
            </button>
          </div>
        </section>

      <div class="popInput">
        <div class="container">
          <span>insira o nome do riff<span>
          <textarea class="input"></textarea>
        </div
      </div>
        `;
    }
}