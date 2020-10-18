const map = L.map("mapid").setView([-9.5554862, -35.7805202], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
.addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

// create and add markers

map.on("click", (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector("[name=lat]").value = lat;
    document.querySelector("[name=lng]").value = lng;

    // Remove icon 
    marker && map.removeLayer(marker);

    // add icon tileLayer
    marker = L.marker([lat, lng], { icon })
    .addTo(map);
})

// select photos:
function addPhotoField() {
    // pick up the photos container .images
    const container = document.querySelector(".images-upload");
    // pick up the container to duplicate
    const fieldsContainer = document.querySelectorAll(".new-upload");
    // clone the last image 
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true); 
    // if field is ""
    const input = newFieldContainer.children[0];
    if(input.value != ""){
        // clean fieldsContainer
        newFieldContainer.children[0].value = "";
        // Add the clone to image container (.image)
        container.appendChild(newFieldContainer);
    } else return;
}

function deleteField(event) {
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll(".new-upload");

    if(fieldsContainer.length <= 1){
        span.parentNode.children[0].value = "";
        return;
    }
    // Delete field

    span.parentNode.remove();
}

// changing "sim" / "não"

function toggleSelect(event) {
    document.querySelectorAll(".button-select button")
    .forEach( (button) => button.classList.remove("active"));
    
    const button = event.currentTarget;
    button.classList.add("active");

    const input = document.querySelector('[name="open_on_weekends"]');

    input.value = button.dataset.value;
}
