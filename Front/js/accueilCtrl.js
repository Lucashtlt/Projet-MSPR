app.controller('accueilCtrl', function($scope, appSvc){
	$scope.infosUrg = appSvc.infosUrg();
  
    $scope.infosImp = appSvc.infosImp();

    $scope.concerts = appSvc.concerts();
   
	var ly = [45.73704956148365, 4.65134526535552];
    //création de la map
    var map = L.map('map').setView(ly, 17);
    L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
        maxZoom: 18
    }).addTo(map);

    //crée markeur

    var marker = L.marker(ly).addTo(map);

    //ajout pop-up

    marker.bindPopup('<h3> Concert, Techno. </h3>');

    var btn = document.querySelector('input');

    //Filtre

$('#type').val('liste');

});
