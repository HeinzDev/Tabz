let dropButton = false;
let dropIndex = 0;
let dropTunned = false;

let guitarSize = 6;
let tone = 0;
let copyString = "";

var defaultTuning = ["E","A","D","G","B","E"];
let tuning = ["E","A","D","G","B","E"];

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

function downTuning(guitarString) {
  let index = noteToInt[guitarString];
  index = index - 1;
  if(index<1)index=12;
  return intToNote[index];
};
function upTuning(guitarString) {
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
    for(let i=0 ; i < tuning.length; i++){
        tuning[i] = upTuning(tuning[i]);
    }
    }else if(dropButton==true){
      tuning[0] = upTuning(tuning[0]);
      dropIndex = dropIndex - 1;
    }
  tone = tone - 1;
  setTuning();
  generate(tone);

  openActionButtons();

 }

function minus(){
    if(!dropButton && dropTunned==false){
      for(let i=0 ; i < guitarSize; i++){
        tuning[i] = downTuning(tuning[i]);
      }
    }else if(dropButton==true){
      tuning[0] = downTuning(tuning[0]);
      dropIndex = dropIndex + 1
    }
    tone = tone + 1;
    setTuning();
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

function setTuning(){
  if(dropButton){document.getElementById('string1').innerHTML = tuning[0];}
  else{
  document.getElementById('string1').innerHTML = tuning[0];
  document.getElementById('string2').innerHTML = tuning[1];
  document.getElementById('string3').innerHTML = tuning[2];
  document.getElementById('string4').innerHTML = tuning[3];
  document.getElementById('string5').innerHTML = tuning[4];
  document.getElementById('string6').innerHTML = tuning[5];
   if(tone>0){document.getElementById('tone').innerHTML = `+${tone}`;}else{
    document.getElementById('tone').innerHTML = `${tone}`;
   }
  }
}

function changeDefault(){
  let select = document.getElementById("selectTuning");
  switch (select.value) {
    case "Default":
     defaultTuning = ["E","A","D","G","B","E"];
    break;
    case "Eb Tuning":
      defaultTuning = ["D#","G#","C#","F#","A#","D#"];
     break;
    case "D Tuning":
     defaultTuning = ["D","G","C","F","A","D"];
     break;
    case "C Tuning":
     defaultTuning = ["C","F","A#","D#","G","C"];
     break;
    case "Drop D":
     defaultTuning = ["D","A","D","G","B","E"];
     break;
  }
  setDefault();
}

function setDefault(){
  tone = 0;
  for(let i=0 ; i < tuning.length; i++){
    tuning[i] = defaultTuning[i];
  }
  setTuning();
}

function editStringNum(str, Num) {
  let newStr = "";
  let arr = str.split("\n");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 0) {
      continue;
    }

    let line = "";
    let hasBar = false;
    let removeDash = false;

    for (let j = 0; j < arr[i].length; j++) {
      let char = arr[i][j];

      if (!isNaN(char)) {
        let num = char;
        if (j + 1 < arr[i].length && !isNaN(arr[i][j + 1])) {
          num += arr[i][j + 1]; // Combine the next digit
          j++; 
        }
        num = parseInt(num) + Num;

        // Detect if the note is unavailible to tab output( less than 0)
        if (num < 0) {
          num = '?';
          toaster('Unavailable notes for tuning');
          redOutput(true);
        } else {
          redOutput(false);//Remove the red text if the note tuning is fixed.
        }

        // 'removeDash' fix the issue with turning the note '9' into '10'. When a digit is added to the number, it changes the entire structure of the tab.
        // The fix involves deleting the '-' before the number to prevent the addition of an extra character in the tab and maintain the tab structure.
        if (removeDash) {
          // Verify if the previous char is a '-'
          let prevCharIndex = j - 2;
          if (prevCharIndex >= 0 && line[prevCharIndex] === '-') {
            line = line.slice(0, prevCharIndex) + line.slice(prevCharIndex + 1); // Remove the "-"
          }
          removeDash = false;
        }

        line += num;
        removeDash = true;
      } else {
        if (char === '-') {
          removeDash = true; // Define to remove the "-" before the next number/note
        }
        line += char;
      }

      if (char === '|') {
        hasBar = true;
      }
    }
    //adding a pipe to separate the strings of the tab
    if (!hasBar) {
      line = '|' + line;
    }
    newStr += line + "\n";
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
    input = removeTuningFromString(input);

    let output = processInput(input, Num);
    copyString = output;
    
    let outputDiv = document.getElementById("outputDiv");
    while (outputDiv.firstChild) {
      outputDiv.removeChild(outputDiv.firstChild);
    }

    // Create the new element in multiples divs as the strings of the tab
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

function tabzEvents(){
  document.getElementById("tabz-file-button").addEventListener("click", () => {
    document.querySelector(".saveContainer").classList.toggle("active");
 });
}

function tabzFilesPopUp(action){
  var tabzFilesPopUp = document.querySelector(".tabz-files-pop-div");

  switch (action) {
    case 'open':
      tabzFilesPopUp.classList.add('active')
      getPastasPopUp();

      break;
    case 'close':
      tabzFilesPopUp.classList.remove('active')
      break;
  }
}

function copyText(){
    let txt = document.createElement('textarea');
    txt.value = copyString;
    document.body.appendChild(txt);
    txt.select();
    document.execCommand('copy');
    document.body.removeChild(txt);
    toaster('Tablature copied to clipboard!');
}

function openActionButtons(){
  var fileButton = document.getElementById("tabz-file-button");
  var favoriteButton = document.getElementById("favorite-button");
  var copyButton = document.getElementById("copy-button");

  setTimeout(()=>{fileButton.classList.add("active");},350)
  setTimeout(()=>{favoriteButton.classList.add("active");},250)
  setTimeout(()=>{copyButton.classList.add("active");},200)
}

function favorite(){
  riffData = {
    name: `${document.getElementById("favoriteRiffName").value}`,
    content: `${document.getElementById("outputDiv").innerText}`, 
    pastaId: null,
    tuning: tuning.join(' '),
    favorite: true
  }
  fetch('/api/pastas/textos/', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(riffData)
  })
  .then(response => response.json())
  .then(data =>{
    console.log(data);
    toaster('Tab favorited!')
    popInput('close');
  })
}

function tabzSaveToFolder(pastaId) {
  let formData = {
    name: document.getElementById("tabName").value,
    content: `${document.getElementById("outputDiv").innerText}`,
    pastaId: pastaId, 
    tuning: tuning.join(' '),
    favorite: document.getElementById("favoriteFormCheckbox").checked
  };

  fetch('/api/pastas/textos/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      toaster('Tab Saved!');
      filesPopUp('close');
    })
    .catch(error => {
      console.error(error);
    });
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

function removeTuningFromString(tab) {
  tab = tab.replace(/ /g, '');
  tab = tab.replace(/[ABCDEFG]/gi, '');
  return tab;
}

function redOutput(boolean){
  if(!boolean){
    return document.getElementById('outputDiv').style.color = '#ddd';
  }
  return document.getElementById('outputDiv').style.color = '#e73d3d';
}
