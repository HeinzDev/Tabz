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

  function getData(){
    const formData = {
      name: document.getElementById("name").value,
      /*content: document.getElementById("tablatureResult").value,*/
      content: "aaaaaa",
      pastaId: "64676b37041925db8e28960f",
      /*favorite: document.getElementById("favorite").value*/
    };

    console.log(formData);
  }

  function events(){
    document.getElementById("saveButton").addEventListener("click", () => {
      document.querySelector(".formContainer").classList.toggle("active");
      
});


  document.getElementById("saveForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário
    var checkbox = document.getElementById("favoriteCheckbox");

    const formData = {
      name: document.getElementById("name").value,
      content: `${document.getElementById("tablatureResult").innerText}`,
      pastaId: "64676b37041925db8e28960f",
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
      // Realize as ações desejadas, como exibir uma mensagem de sucesso ou redirecionar para outra página
    })
    .catch(error => {
      // Manipule os erros, se ocorrerem
      console.error(error);
    });
  });
  }
