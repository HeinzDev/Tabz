import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(params){
        super(params);
        this.setTitle("Create");
    }

    async getHtml(){
        return `
    <div class="view-title">
      <h1>Create</h1>
    </div>

<section class="InputSection">
<div class="create-flex-container">
  <div class="create-tab-container">
    <h1>Create your Tab!</h1>
    <section class="inputBoxes">
      <div class="line1">
        <span id="string1" class="letter">E</span>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
      </div>
      <div class="line2">
        <span id="string2" class="letter">B</span>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
      </div>
      <div class="line3">
        <span id="string3" class="letter">G</span>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
      </div>
      <div class="line4">
        <span id="string4" class="letter">D</span>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
      </div>
      <div class="line5">
        <span id="string5" class="letter">A</span>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
      </div>
      <div class="line6">
        <span id="string6" class="letter">E</span>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
        <textarea class="box" maxlength="2" placeholder="-"></textarea>
      </div>
      </section>
      <button type="button" class="btn" id="create" onclick="generateTablature()">Create!</button>
  </div>
</div>
</div>
<section class="output-box-container">
  <div class="outputBox">
    <span id="tablatureResult"></span>
  </div>
</section>
</div>


<section class="PopContainer">
  <div class="formContainer">
  <form id="saveForm">
    <label for="name">Riff Name</label><br>
    <input type="text" id="name"><br>
    <label for="favoriteCheckbox" id="favoriteLabel">Favorite</label><br>
      <input type="checkbox" id="favoriteCheckbox" name="favorite">

    <button type="button" id="createButton" onclick="filesPopUp('open')">Save</button>
  </form>
  </div>

  <div class="PopButtonDiv">
      <button type="button" id="saveButton" class="PopButton">
      <i class="fas fa-save"></i>
      </button>
  </div>
</section>

<section>
<div class="filesPopUp">
  <h3> Escolha uma pasta para salvar</h3>
  <div id="files-container">
  </div>
</div>  

        `;
    }

    async load() {
      events(); // Chamada da função que gera os cards
  }
}

