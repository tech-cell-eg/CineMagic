import {apiKey} from '../js/config.js'

async function getapi() {
    const api = await fetch(`https://www.omdbapi.com/?s=action&apikey=${apiKey}`);
    let response = await api.json();
    let data  = response.Search;
    // console.log(data);
    
    displayData(data.slice(0,8));``
}

getapi()

function displayData(moviesData){
    let DataRelease = ``;
    for(var i=0; i< moviesData.length; i++){
        DataRelease +=`
              <div class="col-md-3 col-sm-6">
              <div class="content p-3" onclick="showDetails('${moviesData[i].imdbID}')">
                <img src="${moviesData[i].Poster}" class="w-100" alt="">
                <p class="">Release at ${moviesData[i].Year}</p>
            </div>
        </div>
        `;
    }
    document.getElementById("new").innerHTML = DataRelease;
}



window.showDetails = function (id) {
  location.href = `../detailes/detailes.html?id=${id}`;
}
