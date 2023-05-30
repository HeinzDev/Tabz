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
  
          favoritesContainer.appendChild(favorite);

          const favoriteContent = document.createElement('p');
          favoriteContent.textContent = Favorites.content;
          favorite.appendChild(favoriteContent);

          favoritesContainer.appendChild(favorite);
        }
  
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  }