window.sr = ScrollReveal();

sr.reveal(".container",{duration: 1000})
sr.reveal(".container-fluid",{duration: 100})
sr.reveal(".row",{duration: 100})
sr.reveal(".col-4",{duration: 100})

//Preloader


//google maps
let map;

function myMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -1.292066, lng: 36.821945 },
    zoom: 8
  });
}

