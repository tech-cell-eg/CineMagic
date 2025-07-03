window.addEventListener("DOMContentLoaded", () => {
  const favList = document.getElementById("fav-list");
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (favorites.length === 0) {
    favList.innerHTML = "<p class='text-center text-light'>No Movies</p>";
    return;
  }

  favorites.forEach(movie => {
    favList.innerHTML += `
      <div class="col-12 col-md-3 mb-4">
        <div class="content p-3 text-center">
          <img src="${movie.poster}" class="img-fluid w-100" />
          <p class="mt-2 text-light">${movie.title}</p>
        </div>
      </div>
    `;
  });
});
