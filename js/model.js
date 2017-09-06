function appViewModel() {
  var self = this;

  // data for each location
  self.locations = ko.observableArray([
    {name: 'Artspace Visual Arts center', coordinates: {lat: 35.77563, lng: -78.63626199999999}},
    {name: 'Bad Daddy\'s', coordinates: {lat: 35.78859600000001, lng: -78.639772}},
    {name: 'Big Ed\'s City Market Restaurant', coordinates: {lat: 35.7760814, lng: -78.6360027}},
    {name: 'Beasley\'s Chicken + Honey', coordinates: {lat: 35.77705, lng: -78.63803300000001}},
    {name: 'Flying Saucer Draught Emporium', coordinates: {lat: 35.7799437, lng: -78.64481569999998}},
    {name: 'Krispy Kreme Doughnuts', coordinates: {lat: 35.788042, lng: -78.634687}},
    {name: 'Lincoln Theatre', coordinates: {lat: 35.773854, lng: -78.63741600000003}},
    {name: 'Marbles Kids Museum', coordinates: {lat: 35.7783611, lng: -78.63597779999998}},
    {name: 'North Carolina Museum of History', coordinates: {lat: 35.781864, lng: -78.638485}},
    {name: 'North Carolina Museum of Natural Sciences', coordinates: {lat: 35.7824028, lng: -78.64089589999998}},
    {name: 'North Carolina State Capital', coordinates: {lat: 35.7804132, lng: -78.6389428}},
    {name: 'Red Hat Amphitheater', coordinates: {lat: 35.7738011, lng: -78.64308740000001}},
    {name: 'State of Beer', coordinates: {lat: 35.7803, lng: -78.64531699999998}},
    {name: 'The Pit Authentic Barbecue', coordinates: {lat: 35.77603300000001, lng: -78.64471500000002}},
    {name: 'Raleigh Memorial Auditorium', coordinates: {lat: 35.77121899999999, lng: -78.63957640000001}},
    {name: 'The Raleigh Times Bar', coordinates: {lat: 35.7779993, lng: -78.63863379999998}},
    {name: '42nd Street Oyster Bar', coordinates: {lat: 35.7829907, lng: -78.6460515}}
  ]);

  // Array of all markers
  self.markers = [];

  self.siteName = ko.observable("Get to Know Downtown Raleigh");

  var open = false;

  // Open the list view, used on smaller screens
  self.openCloseNav = function() {
    if (open == false) {
      document.getElementById('mySidenav').style.width = '150px';
      document.getElementById('map').style.marginLeft = '150px';
      document.getElementById('header').style.marginLeft = '150px';
      open = true;
    }
    else {
      document.getElementById('mySidenav').style.width = '0';
      document.getElementById('map').style.marginLeft = '0';
      document.getElementById('header').style.marginLeft = '0';
      open = false;
    }
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
}

var data = new appViewModel();

ko.applyBindings(data);
