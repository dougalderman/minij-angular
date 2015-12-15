var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
  $scope.names = ['Tim', 'Dan', 'Doug', 'Jeff', 'Turner'];
})
