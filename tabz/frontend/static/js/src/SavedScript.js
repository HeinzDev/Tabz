function getPastas() {
    let filesContainer = document.getElementById('files-container');
  
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
            file.addEventListener("click", () => {
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