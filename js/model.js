function appViewModel() {
  var self = this;

  // data for each location
  self.locations = ko.observableArray([
    {name: 'Artspace Visual Arts center', coordinates: {lat: 35.775900, lng: -78.636262}},
    {name: 'Bad Daddy\'s', coordinates: {lat: 35.788892, lng: -78.639772}},
    {name: 'Big Ed\'s City Market Restaurant', coordinates: {lat: 35.776264, lng: -78.635989}},
    {name: 'Beasley\'s Chicken+Honey', coordinates: {lat: 35.777337, lng: -78.638076}},
    {name: 'Duke Energy Center For the Performing Arts', coordinates: {lat: 35.771489, lng: -78.639576}},
    {name: 'Capital Building', coordinates: {lat: 35.780425, lng: -78.638967}},
    {name: 'Flying Saucer Draght Emporium', coordinates: {lat: 35.779970, lng: -78.644816}},
    {name: 'Krispy Kreme Doughnuts', coordinates: {lat: 35.788303, lng: -78.634687}},
    {name: 'Lincoln Theatre', coordinates: {lat: 35.773950, lng: -78.637180}},
    {name: 'Legislative Building', coordinates: {lat: 35.783170, lng: -78.638931}},
    {name: 'Marbles Kids Museum', coordinates: {lat: 35.778561, lng: -78.635999}},
    {name: 'Nature Research center', coordinates: {lat: 35.782394, lng: -78.640928}},
    {name: 'North Carolina Museum of History', coordinates: {lat: 35.782099, lng: -78.638474}},
    {name: 'North Carolina Museum of Natural Sciences', coordinates: {lat: 35.782452, lng: -78.639524}},
    {name: 'Red Hat Amphitheater', coordinates: {lat: 35.774001, lng: -78.643109}},
    {name: 'State of Beer', coordinates: {lat: 35.780326, lng: -78.645317}},
    {name: 'The Pour House Music Hall', coordinates: {lat: 35.777405, lng: -78.636849}},
    {name: 'The Pit Authentic Barbecue', coordinates: {lat: 35.776285, lng: -78.644758}},
    {name: 'Raleigh Times', coordinates: {lat: 35.778060, lng: -78.638655}},
    {name: '42nd Street Oyster Bar', coordinates: {lat: 35.783043, lng: -78.646084}}
  ]);

  // Array of all markers
  self.markers = [];

  self.siteName = ko.observable("Get to Know Downtown Raleigh");

  // Open the list view, used on smaller screens
  self.openNav = function() {
    document.getElementById('info-box').style.width = '100%';
  };

  // Close the list view, used on smaller screens
  self.closeNav = function() {
    document.getElementById('info-box').style.width = '0%';
  };

  // Match items in .loc-list to their corresponding marker
  self.matchToMarker = function(location){
    for (var i = 0; i < self.markers.length; i++){
      if (location === self.markers[i].name){
        google.maps.event.trigger(self.markers[i],'click');
      }
    }
  };

  // Attribute to http://www.knockmeout.net/2011/04/utility-functions-in-knockoutjs.html
  // Attribut to https://discussions.udacity.com/t/neighborhood-map-help-with-filter-please/253771
  // Filters list of locations
  self.filter = ko.observable('');
  self.filteredLocs = ko.computed(function() {
    var filter = self.filter().toLowerCase();
    if (!filter) {
      for (var i = 0; i < self.locations().length; i++) {
        if (self.locations()[i].marker) {
          self.locations()[i].marker.setVisible(true);
        }
      }
      return self.locations();
    }
    else {
      return ko.utils.arrayFilter(self.locations(), function(loc) {
        if (loc.name.toLowerCase().indexOf(filter) > -1) {
          loc.marker.setVisible(true);
          return true;
        }
        else {
          loc.marker.setVisible(false);
          return false;
        }
      });
    }
  }, self);
};

var data = new appViewModel();

ko.applyBindings(data);
