
const api_Key= 'c1940cf2';
const searchTerm='cartoon';
fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${api_Key}`)
.then(res =>res.json())
.then(data_api=>{
    if(data_api.Response==='True'){
        const movies =data_api.Search;
        let output ='<div class="row g-4">';
        movies.forEach(movie => {
            output+=`

                  <div class="col-6 col-lg-3">
                  <div class="p-4" style="background: #1A1A1A; border-radius: 8px;">
                 <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'images/placeholder.jpg'}" alt="${movie.Title}" class="img-fluid w-100">
                 <div class="d-flex flex-column p-2">
                  <h3 class="fs-6 text-light">${movie.Title}</h3>
                 <p class="text-secondary">${movie.Year}</p>
                </div>
               </div>
              </div>
            `;
        });
        output+=`</div>`;
        document.getElementById("trending").innerHTML=output;
    }else {
        document.getElementById("trending").innerHTML=`<p>No movies found</p>`;
    }
})
fetch('header.html')
.then(res=>res.text())
.then(data=>{document.getElementById("header").innerHTML=data});

fetch('trending.html')
.then(res=>res.text())
.then(data=>{document.getElementById("trending").innerHTML=data});
fetch('footer.html')
.then(res=>res.text())
.then(data=>{document.getElementById("footer").innerHTML=data});

// ! ====================>  Carousel Html ====================> 
let carousel = document.getElementById("carousel");

fetch("../carousel/carousel.html")
   .then((data) => data.text())
   .then((data) => (carousel.innerHTML = data));

// ! ====================>  NewRelease Html ====================> 
let newRelease = document.getElementById("newRelease");

fetch("../newRelease/release.html")
   .then((data) => data.text())
   .then((data) => (newRelease.innerHTML = data));

// ! ====================>  Details-Section Html ====================> 
let details = document.getElementById("details");
console.log(details);

fetch("../detailes/detailes.html")
   .then((data) => data.text())
   .then((data) => (details.innerHTML = data));

// ! ====================>  Details-Section Html ====================> 
let myFav = document.getElementById("myFav");
console.log(details);

fetch("../MyFav/myFav.html")
   .then((data) => data.text())
   .then((data) => (myFav.innerHTML = data));
