const map = L.map("mapid").setView([-9.5554862, -35.7805202], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// create popup overlay
const popup = L.popup({
  closeButton: false,
  className: "map-popup",
  minWidth: 240,
  minHeight: 240
}).setContent(
  'Lar doce lar <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg" ></a>'
);

L.marker([-9.5554862, -35.7805202], { icon })
  .addTo(map)
  .bindPopup(popup)
  .openPopup();
