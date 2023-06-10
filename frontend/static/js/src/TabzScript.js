let dropButton = false;
let dropIndex = 0;
let dropTunned = false;

let guitarSize = 6;
let tone = 0;
let copyString = "";

var defaultTunning = ["E","A","D","G","B","E"];
let tunning = ["E","A","D","G","B","E"];

const noteToInt = {
  "C": 1,
  "C#": 2,
  "D": 3,
  "D#": 4,
  "E": 5,
  "F": 6,
  "F#": 7,
  "G": 8,
  "G#": 9,
  "A": 10,
  "A#": 11,
  "B": 12
};
const intToNote = {
  1: "C",
  2: "C#",
  3: "D",
  4: "D#",
  5: "E",
  6: "F",
  7: "F#",
  8: "G",
  9: "G#",
  10: "A",
  11: "A#",
  12: "B"
};

function downTunning(guitarString) {
  let index = noteToInt[guitarString];
  index = index - 1;
  if(index<1)index=12;
  return intToNote[index];
};
function upTunning(guitarString) {
  let index = noteToInt[guitarString];
  index = index + 1 ;
  if(index>12)index=1;
  return intToNote[index];
};

setInterval(function() {
  if(dropIndex!=0){dropTunned=true}

}, 1000);

function plus(){
  if(!dropButton && dropTunned==false){
    for(let i=0 ; i < tunning.length; i++){
        tunning[i] = upTunning(tunning[i]);
    }
    }else if(dropButton==true){
      tunning[0] = upTunning(tunning[0]);
      dropIndex = dropIndex - 1;
    }
  tone = tone - 1;
  setTunning();
  generate(tone);

  openActionButtons();

 }

function minus(){

    if(!dropButton && dropTunned==false){
      for(let i=0 ; i < guitarSize; i++){
        tunning[i] = downTunning(tunning[i]);
      }
    }else if(dropButton==true){
      tunning[0] = downTunning(tunning[0]);
      dropIndex = dropIndex + 1
    }

    tone = tone + 1;
    setTunning();
    generate(tone);

    openActionButtons();

 }

function drop(){
  let i = 0;
  if(dropButton && dropIndex==false){
    dropButton=false;
    document.getElementById('dropButton').innerHTML = 'drop';

  }
  else if(!dropButton){
    dropButton=true;
    document.getElementById('dropButton').innerHTML = 'DROP';

  }
  if(dropIndex!=0){
    i=i+1;    
    if(i%3==0){alert('resolva o drop para desativar o botao');}
  }

}

function setTunning(){
  if(dropButton){document.getElementById('string1').innerHTML = tunning[0];}
  else{
  document.getElementById('string1').innerHTML = tunning[0];
  document.getElementById('string2').innerHTML = tunning[1];
  document.getElementById('string3').innerHTML = tunning[2];
  document.getElementById('string4').innerHTML = tunning[3];
  document.getElementById('string5').innerHTML = tunning[4];
  document.getElementById('string6').innerHTML = tunning[5];
   if(tone>0){document.getElementById('tone').innerHTML = `+${tone}`;}else{
    document.getElementById('tone').innerHTML = `${tone}`;
   }
  }
}

function changeDefault(){
  let select = document.getElementById("selectTunning");
  switch (select.value) {
    case "Default":
     defaultTunning = ["E","A","D","G","B","E"];
     break;
    case "D Tunning":
     defaultTunning = ["D","G","C","F","A","D"];
     break;
    case "C Tunning":
     defaultTunning = ["C","F","A#","D#","G","C"];
     break;
    case "Drop D":
     defaultTunning = ["D","A","D","G","B","E"];
     break;
  }
  setDefault();
}

function setDefault(){
  tone = 0;
  for(let i=0 ; i < tunning.length; i++){
    tunning[i] = defaultTunning[i];
  }
  setTunning();
}

function editStringNum(str, Num) {
  let newStr = "";
  let arr = str.split("|");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 0) {
      continue;
    }
    if (newStr.length > 0) {
      newStr += "|";
    }
    if (arr[i][0] === "|") {
      newStr += "|";
    }
    for (let j = 0; j < arr[i].length; j++) {
      let char = arr[i][j];
      if (!isNaN(char)) {
        //Num is how the number will be edited
        let num = parseInt(char) + Num;
        if(num<0)num=null
        newStr += num;
      } else {
        newStr += char;
      }
    }
  }
  return newStr;
}

function processInput(input, Num) {

        let lines = input.split("\n");
        let result = "";
        for (let i = 0; i < lines.length; i++) {
          let line = lines[i];
          if (line.length === 0) {
            continue;
          }
          let newLine = editStringNum(line, Num);
          result += newLine + "\n";
        }
        return result;

}

  function generate(Num) {
  let input = document.getElementById("tabInput").value;
  input = input.replace(/ /g, '');

  let output = processInput(input, Num);
  copyString = output;
  
  let outputDiv = document.getElementById("outputDiv");
  while (outputDiv.firstChild) {
    outputDiv.removeChild(outputDiv.firstChild);
  }

  // Cria um novo elemento de div para cada linha e adiciona ao outputDiv
  let newLines = output.split("\n");
  for (let i = 0; i < newLines.length; i++) {
    let line = newLines[i];
    let span = document.createElement("span");
    span.setAttribute("id", `line${i+1}`);
    span.textContent = line;
    let div = document.createElement("div");
    div.appendChild(span);
    outputDiv.appendChild(div);
  }

}

function copyText(){
    let txt = document.createElement('textarea');
    txt.value = copyString;
    document.body.appendChild(txt);
    txt.select();
    document.execCommand('copy');
    document.body.removeChild(txt);
    toaster('Tablatura copiada!');
}

function openActionButtons(){
  var fileButton = document.getElementById("file-button");
  var favoriteButton = document.getElementById("favorite-button");
  var copyButton = document.getElementById("copy-button");

  setTimeout(()=>{fileButton.classList.add("active");},350)
  setTimeout(()=>{favoriteButton.classList.add("active");},250)
  setTimeout(()=>{copyButton.classList.add("active");},200)
}

function favorite(){
  popInput('open');

  fetc
}

function popInput(action){
  var popInput = document.querySelector(".popInput");

  switch (action) {
    case 'open':
      popInput.classList.add('active')
      break;
    case 'close':
      popInput.classList.remove('active')
      break;
  }
}