const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

const map = L.map("mapid", options).setView([-9.5110256,-35.7949388], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// create popup overlay


L.marker([-9.5110256,-35.7949388], { icon })
  .addTo(map)

 // Image Galery

function selectImage(event) {
  const button = event.currentTarget;

  // remover todas as classes .active;
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach((button) => {

    button.classList.remove("active");

  });
  // console.log(button);
  
  // Selecionar a image clicada;
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanages-details > img");
  // Atualizar o container de image;
    imageContainer.src = image.src;
  // Adicionar a classe .active para o botão clicado;
    button.classList.add("active");
 }