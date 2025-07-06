// window.addEventListener("DOMContentLoaded", () => {
//   const favList = document.getElementById("fav-list");
//   const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

//   if (favorites.length === 0) {
//     favList.innerHTML = "<p class='text-center text-light'>No Movie</p>";
//     return;
//   }

//   favorites.forEach(movie => {
//     favList.innerHTML += `
//       <div class="col-12 col-md-3 mb-4">
//         <div class="content p-3 text-center">
//           <img src="${movie.poster}" class="img-fluid w-100" />
//           <p class="mt-2 text-light">${movie.Released}</p>
//         </div>
//       </div>
//     `;
//   });
// });

window.addEventListener("DOMContentLoaded", () => {
  const favList = document.getElementById("fav-list");
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (favorites.length === 0) {
    favList.innerHTML = "<p class='text-center text-light'>No Movies</p>";
    return;
  }

  favList.innerHTML = ""; 

  favorites.forEach((movie, index) => {
    favList.innerHTML += `
      <div class="col-12 col-md-3 mb-4 mt-3">
        <div class="content p-3 text-center">
          <img src="${movie.poster}" class="img-fluid w-100" />
          <p class="mt-2 text-light">Released at ${movie.Released}</p>
          <i class="fa-solid fa-xmark text-danger remove-fav" 
             data-index="${index}" style="cursor: pointer;"></i>
        </div>
      </div>
    `;
  });

  
  document.querySelectorAll(".remove-fav").forEach(icon => {
    icon.addEventListener("click", function () {
      const index = this.dataset.index;
      favorites.splice(index, 1); 
      localStorage.setItem("favorites", JSON.stringify(favorites));
      location.reload(); 
    });
  });
});
