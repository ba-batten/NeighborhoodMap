function initMap() {

  // Downtown Raleigh coordinates
  var raleigh = {lat: 35.779918, lng: -78.638523};

  // Create map
  var map = new google.maps.Map(document.getElementById('map'),
  {
    center: raleigh,
    zoom: 15,
    styles: styles
  });

  // Creates a single infowindow that will be used on the markers
  var infoWindow = new google.maps.InfoWindow();

  // Set default icon color
  var defaultIcon = makeMarkerIcon('39CCCC');

  // Set color for highlighted icons
  var highlightedIcon = makeMarkerIcon('FFDC00');

  // Create variable to later use to set the map's bounds
  var bounds = new google.maps.LatLngBounds();

  // Place a marker at each location
  data.locations().forEach(function(location){
    // variables
    // var item = data.locations()[i];
    var marker = new google.maps.Marker({
      position: location.coordinates,
      map: map,
      name: location.name,
      icon: defaultIcon,
      animation: google.maps.Animation.DROP
    });

    // Extend the bounds of the map to include marker
    bounds.extend(marker.position);
    google.maps.event.addDomListener(window, 'resize', function() {
      map.fitBounds(bounds);
    });

    // Foursquare API parameter variables
    var mapsKey = "AIzaSyC1M9J_w7JXTULSo3lb0-kZN46iQuxeccU";
    var client_id = "BTC3ZL4HXRG5ZHRYD4MKHDNL5USTZ4FZOPQFMHY41XZD4OXP";
    var client_secret = "KFT5K3C4TLAPCK3ONIZEDFO2Y1B5QFNDR35OWMN0D4X4CBJW";
    var v = "20160830";
    var lat = location.coordinates.lat.toString();
    var lng = location.coordinates.lng.toString();
    var foursquareURL = "https://api.foursquare.com/v2/venues/search?ll=" + lat + "," +
      lng + "&client_id=" + client_id + "&client_secret=" + client_secret + "&v=" + v;
    marker.mapsURL = "https://maps.googleapis.com/maps/api/streetview?size=150x100&location=" + lat + "," +
      lng + "&fov=100&pitch=10&key=" + mapsKey;

    // AJAX request to get info from Foursquare and parse data
    $.getJSON(foursquareURL).done(function(data) {
      var results = data.response.venues[0];

      marker.address = results.location.address;
      marker.city = results.location.city;
      marker.state = results.location.state;
      marker.postalCode = results.location.postalCode;
      marker.phone = results.contact.formattedPhone || "";
      marker.markerURL = results.url || "";

      // marker.id will be used for a for requests to get photos
      marker.id = results.id;

      var picturesURL = "https://api.foursquare.com/v2/venues/" + marker.id + "/photos?" +
        "client_id=" + client_id + "&client_secret=" + client_secret + "&v=" + v + "&limit=3  ";

      // Second AJAX request to get a picture of the location
      $.getJSON(picturesURL).done(function(data) {
        marker.photos = data.response.photos.items;
        console.log(marker.photos);
      }).fail(function(){alert('No pictures this time.  Refresh and try again');
    });}).fail(function(){
      alert('Foursquare is out to lunch.  Refresh and try again.');
    });


    // Adds content to the infowindow
    marker.addListener('click', function() {
      populateInfoWindow(this, infoWindow, location);
    });

    // Highlights marker when mouse is hovering over it
    marker.addListener('mouseover', function() {
      this.setIcon(highlightedIcon);
    });

    // Changes marker color to the default
    marker.addListener('mouseout', function() {
      this.setIcon(defaultIcon);
    });

    data.markers.push(marker);

    // Add marker to locations
    location.marker = marker;
    }
  );

  // Adds content to the infowindow
  function populateInfoWindow(marker, infoWindow) {
    // close open infoWindow
    infoWindow.close();

    // Create a list used to display 3 pictures of each location
    var picList = "<ul class=\"pic-list\">";

    marker.photos.forEach(function(picture){
      if (picture.prefix && picture.suffix) {
        picList += "<li class=\"pic-list-item\"><img src=\"" + picture.prefix + 100 + picture.suffix + "\" class=\"info-img\">";
      }
    });

    picList += "</ul>";

    // Create infoWindow content
    var content = "<div>" +
      picList +
      "<ul class=\"info-list\">" +
      "<li><h4>" + marker.name + "</h4></li>" +
      "<li>" + marker.address + "</li>" +
      "<li>" + marker.city + ", " + marker.state + " " + marker.postalCode + "</li>" +
      "<li><a href=\"tel:" + marker.phone + "\">" + marker.phone + "</a></li>" +
      "<li><a href=\"" + marker.markerURL + "\" target=blank>" + marker.markerURL + "</a></li>" +
      "</ul>" +
      "<p>Powered by Foursquare</p>" +
      "</div>";

    // set content and location of infoWindow
    infoWindow.setContent(content);
    infoWindow.setPosition(marker.position);
    infoWindow.open(map, marker);
  }


  // Creates custom marker
  function makeMarkerIcon(color) {
    var markerImage = new google.maps.MarkerImage(
      'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ color +
      '|40|_|%E2%80%A2',
      new google.maps.Size(21, 34),
      new google.maps.Point(0, 0),
      new google.maps.Point(10, 34),
      new google.maps.Size(21, 34));
    return markerImage;
  }
}

function mapsError() {
  alert("Google Maps is taking a smoke break.  Refresh and try again");
}
