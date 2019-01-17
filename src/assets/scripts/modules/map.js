ymaps.ready(init);

var placemarks = [
  {
    balloonContent: [
      '<div class="map__balloon">',
      "Разработка самых современных и красивых сайтов",
      "</div>"
    ]
  }
];

function init() {
  var map = new ymaps.Map("map", {
    center: [55.755814, 37.617635],
    zoom: 14,
    controls: ["zoomControl"],
    behaviors: ["drag"]
  });

  var placemark = new ymaps.Placemark([55.76601, 37.583571], {
    hintContent: "<div class='map__hint'>улица Зоолгическая, дом 26</div>",
    balloonContent: [
      '<div class="map__balloon">',
      "Разработка самых современных и красивых сайтов",
      "</div>"
    ].join("")
  });
  map.geoObjects.add(placemark);
}
