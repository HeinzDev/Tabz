let deleteCardButton = false;

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

        // Closure para capturar o valor correto de savedFolder.id
        (function(id) {
          file.addEventListener("click", (event) => {
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
                  console.log(savedFile);
                  const fileItem = document.createElement('div');
                  fileItem.classList.add('file');

                  const deleteButton = document.createElement('div');
                  deleteButton.classList.add('delete-button');
                  //deleteButton.innerHTML = '<i class="fas fa-trash"></i>'
                  deleteButton.setAttribute('onclick', `deleteCard('${fileItem._id}')`);
                  deleteButton.addEventListener('click', () => {

                    console.log("saved: "+savedFile._id);
                    fileItem.remove();
                    deleteCard(savedFile._id);
                  });
                  fileItem.appendChild(deleteButton);

                  const fileTitle = document.createElement('h2');
                  fileTitle.textContent = savedFile.name;
                  fileItem.appendChild(fileTitle);

                  const fileContent = document.createElement('p');
                  fileContent.textContent = savedFile.content;
                  fileItem.appendChild(fileContent);

                  fileItem.addEventListener("click", () => {
                    document.querySelector('.riff-container').classList.add('active');
                    let riffName = document.querySelector('.riff-name')
                    let riffText = document.querySelector('.riff');

                    riffName.innerText = savedFile.name;
                    riffText.innerText = savedFile.content;
                  });

                  filesContainer.appendChild(fileItem);
                }

                console.log(data);
              })
              .catch(error => {
                console.error(error);
              });
          });
        })(savedFolder.id);

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
      console.log("Card removido!");
    }

  } catch (error) {
    console.error(error);
  }
}
