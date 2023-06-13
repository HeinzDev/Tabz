let favoriteDeleteButton = false;

function getFavorites() {
    let favoritesContainer = document.getElementById('favorites-container');
  
    fetch('/api/favorites')
      .then(response => response.json())
      .then(data => {
        for (let i = 0; i < data.length; i++) {
          const Favorites = data[i];
  
          const favorite = document.createElement('div');
          favorite.classList.add('file');
          favorite.setAttribute('data-card-id', Favorites._id);
  
          const title = document.createElement('h2');
          title.textContent = Favorites.name;
          favorite.appendChild(title);

          const favoriteContent = document.createElement('p');
          favoriteContent.textContent = Favorites.content;
          favorite.appendChild(favoriteContent);

          favorite.addEventListener("click", () => {
            if(favoriteDeleteButton)return deleteCard(Favorites._id);

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

  function favoriteEvents(){
    document.querySelector(".popButtonDelete").addEventListener("click", () => {
      favoriteDeleteButton = !favoriteDeleteButton ? true : false;
      console.log(favoriteDeleteButton);
      document.querySelector(".popButtonDelete").classList.toggle("active");
    });
  }

function closeRiffView(){
  document.querySelector('.riff-container').classList.remove('active');
}