var createRiffTuning = "E A D G B E";

function generateTablature() {
    const boxes = document.getElementsByClassName('box');
    let tablature = '';
  
    for (let i = 0; i < boxes.length; i++) {
      const box = boxes[i];
      const value = box.value || '-';

      if (i % 1 === 0 && i !== 0) {
        tablature += '- '; // Adiciona uma quebra de linha antes de cada nova linha
      }
  
      if (i % 17 === 0 && i !== 0) {
        tablature += '\n'; // Adiciona uma quebra de linha antes de cada nova linha
      }
  
      if (i % 17 === 0) {
        tablature += ' '; // Adiciona um espaço no primeiro caractere de cada linha
      }
  
      tablature += value + ' ';
    }
  
    const tablatureResult = document.getElementById('tablatureResult');
    tablatureResult.innerText = tablature.trim(); // Remove espaços em branco extras no início e no final
  
    return tablature;
  };

  function events(){
    document.getElementById("create").addEventListener("click", () => {
      document.querySelector(".outputBox").classList.add("active");
   });

    document.getElementById("saveButton").addEventListener("click", () => {
      document.querySelector(".formContainer").classList.toggle("active");
   });

    document.getElementById("add-tuning-create").addEventListener("click", () => {
      createSetTuning('add');
  });
    document.getElementById("decrease-tuning-create").addEventListener("click", () => {
      createSetTuning('subtract');
    });

  }

  function createSetTuning(action) {
    const tuningNumberArray = [];
    const tuningArray = [];
    const stringCount = 6; // Number of strings
  
    for (let i = 1; i <= stringCount; i++) {
      const stringElements = document.querySelectorAll(`.create-string${i}`);
      const currentNote = stringElements[0].innerText;
      let currentNoteIndex = noteToInt[currentNote];

      // Update the tuning based on the action
      if (action === 'add') {
        currentNoteIndex = (currentNoteIndex + 1) % 12;
      } else if (action === 'subtract') {
        currentNoteIndex = (currentNoteIndex - 1 + 12) % 12;
      }
  
      // Handle values outside the range [1, 12]
      if (currentNoteIndex > 12) {
        currentNoteIndex = 1;
      } else if (currentNoteIndex < 1) {
        currentNoteIndex = 12;
      }
  
      tuningNumberArray.push(currentNoteIndex);
      tuningArray.push(intToNote[currentNoteIndex])

      stringElements[0].innerText = intToNote[currentNoteIndex];
      stringElements[1].innerText = intToNote[currentNoteIndex];
    }
    createRiffTuning = tuningArray.join(' ');
    console.log("post tuning: "+ createRiffTuning);
  }
  

  function filesPopUp(action, bool){

    var filesPopUp = document.querySelector(".files-pop-div");
  
    switch (action) {
      case 'open':
        filesPopUp.classList.add('active')
        getPastasPopUp(bool);
        break;

      case 'close':
        filesPopUp.classList.remove('active')
        break;
    }
  }

  function getPastasPopUp(mainPage) {
    let filesContainer = document.getElementById('pop-files-container');
  
    fetch('/api/pastas/')
      .then(response => response.json())
      .then(data => {
        while (filesContainer.firstChild) {
          filesContainer.removeChild(filesContainer.firstChild);
        }

        for (let i = 0; i < data.length; i++) {
          const savedFolder = data[i];
  
          const file = document.createElement('div');
          file.classList.add('file');
  
          const title = document.createElement('h2');
          title.textContent = savedFolder.name;
          file.appendChild(title);
  
          file.addEventListener('click', function() {
            if(mainPage)return tabzSaveToFolder(savedFolder._id)
            SaveToFolder(savedFolder._id); 
          });
  
          filesContainer.appendChild(file);
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  function SaveToFolder(pastaId) {
    var checkbox = document.getElementById("favoriteCheckbox");
  
    const formData = {
      name: document.getElementById("name").value,
      content: `${document.getElementById("tablatureResult").innerText}`,
      pastaId: pastaId, 
      tuning: createRiffTuning,
      favorite: checkbox.checked
    };
  
    console.log(formData);
  
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
        toaster('Tab Saved!', 'success');
        filesPopUp('close');
        document.querySelector(".formContainer").classList.remove("active");
      })
      .catch(error => {
        console.error(error);
      });
  }