
app.service('appSvc', function($http){
	

	this.events = function(item)
	{

	
		return $http({
			method: 'GET',
			url: 'http://localhost:8000/events',
			params: {q: evenement},
		})
		.then(function success(response){
			console.log(response.data);
			return response.data;
		}, function error(response){
			console.log(response.statusText);
		});
	}

/*	this.listEvent = function(critere)
	{
		switch(critere){

			case 'date' :
				return $http({
					method: 'GET',
					url: 'http://localhost:8000/eventsByDate',
					params: {},
				});
				break;

			case 'heure' :
				return $http({
					method: 'GET',
					url: 'http://localhost:8000/eventsByHour',
					params: {critere: critere},
				});
				break;

			case 'lieu' :
				return $http({
					method: 'GET',
					url: 'http://localhost:8000/eventsByLocation',
					params: {critere: critere},
				});
				break;

			case 'type' :
				return $http({
					method: 'GET',
					url: 'http://localhost:8000/eventsByType',
					params: {critere: critere},
				});
				break;
			}

		.then(function success(response){
			console.log(response.data);
			return response.data;
		}, function error(response){
			console.log(response.statusText);
		});
	
	} 
*/

	this.concerts = function(item)
	{
		return $http({
			method: 'GET',
			url: 'http://localhost:8000/concerts',
			params: {q: evenement},
		})
		.then(function success(response){
			console.log(response.data);
			return response.data;
		}, function error(response){
			console.log(response.statusText);
		});
	}

	this.infosUrg = function(key)
	{
		return $http({
			method: 'GET',
			url: 'http://localhost:8000/infosUrg',
			params: {},
		})
		.then( 
			function success(response){
				return response.data;
			}, 
			function error(response){
				return response.statusText;
			});
	}

	this.infosImp = function(key)
	{
		return $http({
			method: 'GET',
			url: 'http://localhost:8000/infosImp',
			params: {},
		})
		.then( 
			function success(response){
				return response.data;
			}, 
			function error(response){
				return response.statusText;
			});
	}

	this.carte = function()
	{
		//coordonnées stockées dans le localStorage.
		var coords = [localStorage.getItem('lat'), localStorage.getItem('lng')];
		//création de la carte.
		var map = L.map(this.idCarte).setView(coords, 17); //17 = niveau de zoom de départ
		//copyright OpenStreetMap
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);
		//le marqueur avec le texte (non paramétré)
		L.marker(coords).addTo(map)
    .bindPopup('Voici l\'endroit dont vous avez demandé la météo')
    .openPopup();
	}
});