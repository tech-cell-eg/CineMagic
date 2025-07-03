import { api_Key } from "./js/config.js";
 async function getapi(){
 const api_trend=await fetch(`https://www.omdbapi.com/?s=cartoon&apikey=${api_Key}`);
 let response= await api_trend.json();
 let data = await response.Search;
 displaymovies(data);
  console.log(data);
 }
getapi();
function displaymovies(movies){
   let output =` <div class=" boxes row g-5" > `;
    for(var i=0;i< movies.length; i++){
        output +=`
                 
                  <div class="film-card col-md-3 col-sm-6">
                  <div   style="border-radius: 8px;" onclick="showdetails('${movies[i].imdbID}')"   >
                 <img src="${movies[i].Poster !== 'N/A' ? movies[i].Poster : 'images/placeholder.jpg'}" alt="${movies[i].Title}" class="img-fluid w-100">
                 <div class=" film-title p-2">
                  <h3 class="fs-6 text-light text-center">${movies[i].Title}</h3>
                </div>
               </div>
              </div>
              
        `;
    }
    output += `</div>`;
    document.querySelector('.trending-movies').innerHTML=output;
}