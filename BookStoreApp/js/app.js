angular.module('BookStoreApp', []).

  //definimos las rutas de la 'app'
  config(['$routeProvider', function($routes) {
  
  $routes.
      when('/books', {
		  templateUrl: 'data/listaLibros.html',
		  controller: LibrosListController
		  }).
	  
	  //mediante dos puntos (:) definimos un parámetro
      when('/book/:libroId', {
		  templateUrl: 'data/book.html',
		  controller: LibroDetailController
		  }).
	 
	  //cualquier ruta no definida  
      otherwise({
		  redirectTo: '/books'});

}]);