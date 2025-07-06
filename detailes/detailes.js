import { api_Key } from "../js/config.js";

const searchParams = location.search; //'?id=tt0094612'
const params = new URLSearchParams(searchParams);
const id = params.get("id");

(async function () {
    const api = await fetch(
        `https://www.omdbapi.com/?i=${id}&apikey=${api_Key}`
    );
    let response = await api.json();
    let data = response;

    displayData(data);
})();

function displayData(moviesDetailes) {
    let movie = ``;
    movie += `
              <div class="carousel-item active">
      <img src="${moviesDetailes.Poster}" class="d-block w-100" alt="...">
      <div class="carousel-caption">
        <h5>${moviesDetailes.Title}</h5>
        <p>${moviesDetailes.Plot}</p>
        <div class="icons">
          <div class="des-btn">
            <i class="fa-solid fa-play"></i>
            <button type="button" class="btn">Play Now</button>
          </div>
          <div class="plus" onclick="addMyFav('${id}', '${moviesDetailes.Released}', '${moviesDetailes.Poster}')">
            <i class="fa-solid fa-plus"></i>
          </div>
          <div class="thumbs">
            <i class="fa-solid fa-thumbs-up"></i>
          </div>
        </div>
      </div>
    </div>
        `;
    document.getElementById("oneMovie").innerHTML = movie;
}

window.addMyFav = (id, Released, poster) => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const exists = favorites.find((movie) => movie.id && movie.id === id);
    if (!exists) {
        favorites.push({ id, Released, poster });
        // console.log(favorites);
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }

    location.href = "../MyFav/myFav.html";
};
