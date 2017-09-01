function initMap() {

  // function ajaxReq(loc) {
  //   // Foursquare API parameter variables
  //   var client_id = "GCGFZLHFZD5V45L3AHPHIVUTFO5I4NVWCSKCCQEOXXS30CCS";
  //   var client_secret = "WSYUL5VCJCSQNINMQPCAHF0UEDKLGH2VC3FNMJ1BAN5VIUXB";
  //   var v = "20160830";
  //   var lat = loc.coordinates.lat;
  //   var lng = loc.coordinates.lng;
  //   var foursquareURL = "https://api.foursquare.com/v2/venues/search?ll=" + lat + "," + lng + "&client_id=" + client_id + "&client_secret=" + client_secret + "&v=" + v;
  //
  //   var results = $.getJSON(foursquareURL);
  //
  //   return results;
  // };

  // Downtown Raleigh coordinates
  var raleigh = {lat: 35.779918, lng: -78.638523};

  // Create map
  var map = new google.maps.Map(document.getElementById('map'),
  {
    center: raleigh,
    zoom: 15,
    styles: [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ebe3cd"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#523735"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f1e6"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#c9b2a6"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#dcd2be"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#ae9e90"
          }
        ]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "poi",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#93817c"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#a5b076"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#447530"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f1e6"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#fdfcf8"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f8c967"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#e9bc62"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e98d58"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#db8555"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#806b63"
          }
        ]
      },
      {
        "featureType": "transit",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#8f7d77"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#ebe3cd"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#b9d3c2"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#92998d"
          }
        ]
      }
    ]
  });

  // Creates a single infowindow that will be used on the markers
  var infoWindow = new google.maps.InfoWindow();

  // Set default icon color
  var defaultIcon = makeMarkerIcon('39CCCC');

  // Set color for highlighted icons
  var highlightedIcon = makeMarkerIcon('FFDC00');

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

    // Add marker to locations
    location.marker = marker;
    }
  );

  // Adds content to the infowindow
  function populateInfoWindow(marker, infoWindow, loc) {
    // close open infoWindow
    infoWindow.close();

    // Foursquare API parameter variables
    var phone, address, city, state, postalCode, markerURL;
    var mapsKey = "AIzaSyC1M9J_w7JXTULSo3lb0-kZN46iQuxeccU";
    var client_id = "GCGFZLHFZD5V45L3AHPHIVUTFO5I4NVWCSKCCQEOXXS30CCS";
    var client_secret = "WSYUL5VCJCSQNINMQPCAHF0UEDKLGH2VC3FNMJ1BAN5VIUXB";
    var v = "20160830";
    var lat = loc.coordinates.lat.toString();
    var lng = loc.coordinates.lng.toString();
    var foursquareURL = "https://api.foursquare.com/v2/venues/search?ll=" + lat + "," +
      lng + "&client_id=" + client_id + "&client_secret=" + client_secret + "&v=" + v;
    var mapsURL = "https://maps.googleapis.com/maps/api/streetview?size=150x100&location=" + lat + "," +
      lng + "&fov=100&pitch=10&key=" + mapsKey;

    // AJAX request to get info from Foursquare and parse data
    $.getJSON(foursquareURL).done(function(data) {
      var results = data.response.venues[0];

      phone = results.contact.formattedPhone;
      address = results.location.address
      city = results.location.city
      state = results.location.state
      postalCode = results.location.postalCode;
      markerURL = results.url;

      // Create infoWindow content
      var content = "<div><img src=\"" + mapsURL + "\">" +
        "<ul>" +
        "<li><h4>" + marker.name + "</h4></li>" +
        "<li>" + address + "</li>" +
        "<li>" + city + ", " + state + " " + postalCode + "</li>" +
        "<li><a href=\"tel:" + phone + "\">" + phone + "</a></li>" +
        "<li><a href=\"" + markerURL + "\" target=blank>" + markerURL + "</a></li>" +
        "</ul>" +
        "</div>"

      // set content and location of infoWindow
      infoWindow.setContent(content);
      infoWindow.setPosition(marker.position);
      infoWindow.open(map, marker);
    }).fail(function(){
      alert('Foursquare is out to lunch.  Refresh and try again.')
    });

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

};

function mapsError() {
  alert("Google Maps is taking a smoke break.  Refresh and try again");
}
