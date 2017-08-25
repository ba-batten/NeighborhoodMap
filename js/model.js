function appViewModel() {
  this.locations = [
    {name: 'North Carolina Museum of Natural Sciences', coordinates: {lat: 35.782452, lng: -78.639524}},
    {name: 'Artspace Visual Arts center', coordinates: {lat: 35.775900, lng: -78.636262}},
    {name: 'North Carolina Museum of History', coordinates: {lat: 35.782099, lng: -78.638474}},
    {name: 'Duke Energy Center For the Performing Arts', coordinates: {lat: 35.771489, lng: -78.639576}},
    {name: 'Marbles Kids Museum', coordinates: {lat: 35.778561, lng: -78.635999}},
    {name: 'Raleigh Memorial Auditorium', coordinates: {lat: 35.771574, lng: -78.639618}},
    {name: 'Red Hat Amphitheater', coordinates: {lat: 35.774001, lng: -78.643109}},
    {name: 'Lincoln Theatre', coordinates: {lat: 35.773950, lng: -78.637180}},
    {name: 'The Pour House Music Hall', coordinates: {lat: 35.777405, lng: -78.636849}},
    {name: 'Beasley\'s Chicken+Honey', coordinates: {lat: 35.777337, lng: -78.638076}},
    {name: 'Krispy Kreme Doughnuts', coordinates: {lat: 35.788303, lng: -78.634687}},
    {name: 'The Pit Authentic Barbecue', coordinates: {lat: 35.776285, lng: -78.644758}},
    {name: 'Bad Daddy\'s', coordinates: {lat: 35.788892, lng: -78.639772}},
    {name: 'Flying Saucer Draght Emporium', coordinates: {lat: 35.779970, lng: -78.644816}},
    {name: '42nd Street Oyster Bar', coordinates: {lat: 35.783043, lng: -78.646084}},
    {name: 'State of Beer', coordinates: {lat: 35.780326, lng: -78.645317}},
    {name: 'Nature Research center', coordinates: {lat: 35.782394, lng: -78.640928}},
    {name: 'Capital Building', coordinates: {lat: 35.780425, lng: -78.638967}},
    {name: 'Legislative Building', coordinates: {lat: 35.783170, lng: -78.638931}},
    {name: 'Raleigh Times', coordinates: {lat: 35.778060, lng: -78.638655}},
    {name: 'Big Ed\'s City Market Restaurant', coordinates: {lat: 35.776264, lng: -78.635989}},
    {name: 'Raleigh Memorial Auditorium', coordinates: {lat: 35.771313, lng: -78.639607}}
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
