/! ====================  Carousel Html ==================== / 
let carousel = document.getElementById("carousel");

fetch("../carousel/carousel.html")
   .then((data) => data.text())
   .then((data) => (carousel.innerHTML = data));
