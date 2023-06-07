import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(params){
        super(params);
        this.setTitle("Create");
    }

    async getHtml(){
        return `
        <script src="../src/CreateScript.js"></script>
        <link rel="stylesheet" href="../static/CSS/create.css">
    <div class="view-title">
      <h1>Create</h1>
    </div>
<section class="InputSection">

<div class="tunning">
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
<div class="tunning-buttons">
<button type="button" class="btn" id="dropButton" onclick="plus()">+</button>
<button type="button" class="btn" id="default" onclick="minus()">-</button>
</div>
</div>

  <div class="createTab">
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
      <button type="button" class="btn" id="create" onclick="generateTablature()">Create!</button>
</section>
<section class="outputBox">
      <span id="tablatureResult"></span>
    </section>
</div>


</section>

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

