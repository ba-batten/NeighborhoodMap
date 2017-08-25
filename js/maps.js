function initMap() {
  var data = new appViewModel
  var raleigh = {lat: 35.779918, lng: -78.638523}
  var map = new google.maps.Map(document.getElementById('map'),
  {
    center: raleigh,
    zoom: 15
  });

  for (var i = 0; i < data.locations().length; i++) {
    var marker = new google.maps.Marker({
      position: data.locations()[i].coordinates,
      map: map
    });
  }


};
