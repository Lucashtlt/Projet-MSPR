//modules + controleurs + routage (injection du module routage)
var app = angular.module('routage', ['ngRoute']);
//configuration des routes
//$routeProvider permet de configurer les différentes routes
app.config(function($routeProvider){
	$routeProvider
	//si '/' dans l'url, appel de home.html + controleur homeCtrl
	.when('/', {
		templateUrl: 'templates/accueil.html',
		controller: 'accueilCtrl'
	})
	.when('/carte', {
		templateUrl: 'templates/carte.html',
		controller: 'carteCtrl'
	})
	.when('/billeterie', {
		templateUrl: 'templates/billeterie.html',
		controller: 'billeterieCtrl'
	})
	.when('/FAQ', {
		templateUrl: 'templates/FAQ.html',
		controller: 'FAQCtrl'
	})
	.when('/informations', {
		templateUrl: 'templates/informations.html',
		controller: 'informationsCtrl'
    })
    .when('/partenaires', {
		templateUrl: 'templates/partenaires.html',
		controller: 'partenairesCtrl'
    })
    .when('/programme', {
		templateUrl: 'templates/programme.html',
		controller: 'programmeCtrl'
    })
    .when('/reseaux', {
		templateUrl: 'templates/reseaux.html',
		controller: 'reseauxCtrl'
	})
	.when('/mentionslegales', {
		templateUrl: 'templates/ml.html',
		controller: 'mlCtrl'
	})
	//équivalent 404
	.otherwise({
		redirectTo: '/'
	});
});