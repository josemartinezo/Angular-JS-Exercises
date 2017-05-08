/**
* LibroDetailController
* Controlador de la ficha del libro
* $scope - ámbito
* $http - 
* $routeParams - parámetros de la ruta
*/
function LibroDetailController($scope, $http, $routeParams) {
  $scope.id = $routeParams.libroId;

  $http.get('data/book'+$scope.id+'.json').success(function(data) {
	  $scope.book = data[0];
  });
 
}