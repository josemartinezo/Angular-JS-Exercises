/**
* LibrosListController
* Controlador del listado de libros
*/
function LibrosListController($scope, $http) {
  $http.get('data/books.json').success(function(data) {
	$scope.books = data;
  });
 
 
  
  


}