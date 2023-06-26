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

<div class="tuning-create">
<select id="selectTuning" name="selectTuning" onchange="changeDefault()">
<option value="Default"> E Tuning</option>
<option value="D Tuning">D Tuning</option>
<option value="C Tuning">C Tuning</option>
<option value="Drop D">Drop D</option>
</select>

  <div class="tuning-box">
  <span class="create-string1">E</span>
  <span class="create-string2">A</span>
  <span class="create-string3">D</span>
  <span class="create-string4">G</span>
  <span class="create-string5">B</span>
  <span class="create-string6">E</span>

  </div>
  <div class="tuning-buttons">
  <button type="button" class="btn" id="add-tuning-create">+</button>
    <button type="button" class="btn" id="decrease-tuning-create">-</button>
  </div>
</div>

</div>

<div class="create-flex-container">
  <div class="create-tab-container">
    <h1>Create your Tab!</h1>
    <section class="inputBoxes">
    <div class="tab-letters-div">
        <span class="create-string1">E</span>
        <span class="create-string2">B</span>
        <span class="create-string3">G</span>
        <span class="create-string4">D</span>
        <span class="create-string5">A</span>
        <span class="create-string6">E</span>
    </div>

    <div class="tab-boxes-div">
        <div class="line1 nowrap">
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
          <div class="line2 nowrap">
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
          <div class="line3 nowrap">
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
          <div class="line4 nowrap">
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
          <div class="line5 nowrap">
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
          <div class="line6 nowrap">
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

    <button type="button" id="popSaveButton" onclick="filesPopUp('open')">Save</button>
  </form>
  </div>

  <div class="PopButtonDiv">
      <button type="button" id="saveButton" class="PopButton">
      <i class="fas fa-save"></i>
      </button>
  </div>
</section>

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

        `;
    }

    async load() {
      events(); // Chamada da função que gera os cards
  }
}

