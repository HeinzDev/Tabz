function getFavorites() {
    let favoritesContainer = document.getElementById('favorites-container');
  
    fetch('/api/favorites')
      .then(response => response.json())
      .then(data => {
        for (let i = 0; i < data.length; i++) {
          const Favorites = data[i];
  
          const favorite = document.createElement('div');
          favorite.classList.add('file');
  
          const title = document.createElement('h2');
          title.textContent = Favorites.name;
          favorite.appendChild(title);

          const favoriteContent = document.createElement('p');
          favoriteContent.textContent = Favorites.content;
          favorite.appendChild(favoriteContent);

          favorite.addEventListener("click", (event) => {
            document.querySelector('.riff-container').classList.add('active');
            let riffName = document.querySelector('.riff-name')
            let riffText = document.querySelector('.riff');

            riffName.innerText = Favorites.name;
            riffText.innerText = Favorites.content;
          });

          favoritesContainer.appendChild(favorite);
        }
  
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  }

function closeRiffView(){
  document.querySelector('.riff-container').classList.remove('active');
}