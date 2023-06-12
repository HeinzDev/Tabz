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
    tablatureResult.textContent = tablature.trim(); // Remove espaços em branco extras no início e no final
  
    return tablature;
  };

  function events(){
    document.getElementById("saveButton").addEventListener("click", () => {
      document.querySelector(".formContainer").classList.toggle("active");
   });

  }


  function filesPopUp(action){
    var filesPopUp = document.querySelector(".files-pop-div");
  
    switch (action) {
      case 'open':
        filesPopUp.classList.add('active')
        getPastasPopUp();

        break;
      case 'close':
        filesPopUp.classList.remove('active')
        break;
    }
  }

  function getPastasPopUp() {
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
            enviarParaPasta(savedFolder._id); 
          });
  
          filesContainer.appendChild(file);
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  function enviarParaPasta(pastaId) {
    var checkbox = document.getElementById("favoriteCheckbox");
  
    const formData = {
      name: document.getElementById("name").value,
      content: `${document.getElementById("tablatureResult").innerText}`,
      pastaId: pastaId, 
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
        toaster('Tab Saved!');
        filesPopUp('close');
      })
      .catch(error => {
        console.error(error);
      });
  }