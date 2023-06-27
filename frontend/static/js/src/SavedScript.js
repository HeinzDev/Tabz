let savedDeleteButton = false;

function getPastas() {
  let filesContainer = document.getElementById('files-container');
  filesContainer.innerHTML = ''; // Limpar o contêiner antes de adicionar as pastas novamente
  var mainTitle = document.querySelector('.title');

  fetch('/api/pastas/')
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i < data.length; i++) {
        const savedFolder = data[i];

        const file = document.createElement('div');
        file.classList.add('file');
        file.setAttribute('data-card-id', savedFolder._id);

        const title = document.createElement('h2');
        title.textContent = savedFolder.name;
        file.appendChild(title);

          file.addEventListener("click", () => {
            if(savedDeleteButton){
              savedDeleteButton = false;
              document.querySelector(".popButtonDelete").classList.remove("active");
              deleteFile(savedFolder._id);
              return getPastas();
            }

            mainTitle.innerText = savedFolder.name;

            fetch(`/api/pastas/${savedFolder._id}/textos/`)
              .then(response => response.json())
              .then(data => {
                // Remover os arquivos existentes antes de adicionar novos
                while (filesContainer.firstChild) {
                  filesContainer.removeChild(filesContainer.firstChild);
                }

                for (let i = 0; i < data.length; i++) {
                  const savedFile = data[i];
                  const fileItem = document.createElement('div');
                  fileItem.classList.add('file');
                  fileItem.setAttribute('data-card-id', savedFile._id);

                  const fileTitle = document.createElement('h2');
                  fileTitle.textContent = savedFile.name;
                  fileItem.appendChild(fileTitle);

                  const fileContent = document.createElement('p');
                  fileContent.textContent = savedFile.content;
                  fileItem.appendChild(fileContent);

                  fileItem.addEventListener("click", () => {
                    if(savedDeleteButton){
                      savedDeleteButton = false;
                      document.querySelector(".popButtonDelete").classList.remove("active");
                      return deleteCard(savedFile._id);
                    }

                    document.querySelector('.riff-container').classList.add('active');
                    let riffName = document.querySelector('.riff-name')
                    let riffText = document.querySelector('.riff');
                    let riffTuning = document.querySelector('.riff-tuning');

                    riffName.innerText = savedFile.name;
                    riffText.innerText = savedFile.content;
                    riffTuning.innerText = savedFile.tuning;
                  });

                  filesContainer.appendChild(fileItem);
                }

                console.log(data);
              })
              .catch(error => {
                console.error(error);
              });
          });


        filesContainer.appendChild(file);
      }

      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
}

function SavedEvents() {
  document.getElementById("fileButton").addEventListener("click", () => {
    document.querySelector(".formContainer").classList.toggle("active");
  });

  document.querySelector(".popButtonDelete").addEventListener("click", () => {
    savedDeleteButton = !savedDeleteButton ? true : false;
    document.querySelector(".popButtonDelete").classList.toggle("active");
  });

  document.getElementById("fileForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = {
      name: document.getElementById("fileName").value,
    };

    console.log(formData);

    fetch('/api/pastas/', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        document.querySelector(".formContainer").classList.remove("active");
        getPastas();
      })
      .catch(error => {
        console.error(error);
      });
  });
}

async function deleteCard(cardId) {
  try {
    const response = await fetch(`/api/pastas/textos/${cardId}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      
      const cardElement = document.querySelector('[data-card-id="' + cardId + '"]');
      console.log(cardElement);
      if (cardElement) {
        cardElement.remove();
        toaster("Card removed!");
      }
    }
  } catch (error) {
    console.error(error);
  }
}

async function deleteFile(fileId) {
  fetch(`/api/pastas/${fileId}/textos/`)
    .then(response => response.json())
    .then(textos => {
      // Delete all the file content
      textos.forEach(texto => {
        fetch(`/api/pastas/textos/${texto._id}`, {
          method: 'DELETE'
        })
          .then(response => response.json())
          .then(result => {
            console.log('Riff Deleted:', result);
            toaster('Riff deleted!')
          })
          .catch(error => {
            console.error('Erro ao deletar o texto:', error);
          });
      });

      //delete the file itself
      fetch(`/api/pastas/${fileId}`, {
        method: 'DELETE'
      })
        .then(response => response.json())
        .then(result => {
            //remove from DOM
            const fileElement = document.querySelector('[data-card-id="' +fileId + '"]');
            if (fileElement) {
              fileElement.remove();
              toaster("File Deleted!");
            }
        })
        .catch(error => {
          console.error('Erro ao deletar a pasta:', error);
        });
    })
    .catch(error => {
      console.error('Erro ao obter os textos da pasta:', error);
    });
}
