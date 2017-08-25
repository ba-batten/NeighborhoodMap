function appViewModel() {
  this.locations = [
    {name: 'North Carolina Museum of Natural Sciences', coordinates: {lat: 35.782452, lng: -78.639524},
    {name: 'Artspace Visual Arts center', coordinates: {lat: , lng: },
    {name: 'North Carolina Museum of History', coordinates: {lat: , lng: },
    {name: 'Duke Energy Center For the Performing Arts', coordinates: {lat: , lng: },
    {name: 'Marbles Kids Museum', coordinates: {lat: , lng: },
    {name: 'Raleigh Memorial Auditorium', coordinates: {lat: , lng: },
    {name: 'Red Hat Amphitheater', coordinates: {lat: , lng: },
    {name: 'Lincoln Theatre', coordinates: {lat: , lng: },
    {name: 'The Pour House Music Hall', coordinates: {lat: , lng: },
    {name: 'Beasley\'s Chicken+Honey', coordinates: {lat: , lng: },
    {name: 'Krispy Kreme Doughnuts', coordinates: {lat: , lng: },
    {name: 'The Pit Authentic Barbecue', coordinates: {lat: , lng: },
    {name: 'Bad Daddy\'s', coordinates: {lat: , lng: },
    {name: 'Flying Saucer Draght Emporium', coordinates: {lat: , lng: },
    {name: '42nd Street Oyster Bar', coordinates: {lat: , lng: },
    {name: 'State of Beer', coordinates: {lat: , lng: },
    {name: 'Nature Research center', coordinates: {lat: , lng: },
    {name: 'Capital Building', coordinates: {lat: , lng: },
    {name: 'Legislative Building', coordinates: {lat: , lng: },
    {name: 'Raleigh Times', coordinates: {lat: , lng: },
    {name: 'Big Ed\'s City Market Restaurant', coordinates: {lat: , lng: },
    {name: 'Raleigh Memorial Auditorium', coordinates: {lat: , lng: }
  ]
  this.siteName = ko.observable("Get to Know Downtown Raleigh");

  this.openNav = function() {
    document.getElementById('info-box').style.width = '100%';
  };

  this.closeNav = function() {
    document.getElementById('info-box').style.width = '0%';
  };
};

ko.applyBindings(new appViewModel());
