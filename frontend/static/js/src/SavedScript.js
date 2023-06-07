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
  
          const title = document.createElement('h2');
          title.textContent = savedFolder.name;
          file.appendChild(title);
  
          // Closure para capturar o valor correto de savedFolder.id
          (function(id) {
            file.addEventListener("click", (event) => {
              console.log(savedFolder.name);
              mainTitle.innerText = savedFolder.name;

              fetch(`/api/pastas/${id}/textos/`)
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
                    const fileTitle = document.createElement('h2');
                    fileTitle.textContent = savedFile.name;
                    fileItem.appendChild(fileTitle);
  
                    // Adicionar o conteúdo do arquivo como um elemento <p>
                    const fileContent = document.createElement('p');
                    fileContent.textContent = savedFile.content;
                    fileItem.appendChild(fileContent);
  
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

  function SavedEvents(){
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
