fetch('header.html')
.then(res=>res.text())
.then(data=>{document.getElementById("header").innerHTML=data});

fetch('footer.html')
.then(res=>res.text())
.then(data=>{document.getElementById("footer").innerHTML=data});
/! ====================  Carousel Html ==================== / 
let carousel = document.getElementById("carousel");

fetch("../carousel/carousel.html")
   .then((data) => data.text())
   .then((data) => (carousel.innerHTML = data));
