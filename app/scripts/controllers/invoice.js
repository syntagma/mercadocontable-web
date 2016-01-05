'use strict';

/**
 * @ngdoc function
 * @name angularjsGiphyAppApp.controller:GifCtrl
 * @description
 * # GifCtrl
 * Controller of the angularjsGiphyAppApp
 */
angular.module('mercadocontableWebApp')
  .controller('InvoiceCtrl', ['$scope', '$http', '$q', function ($scope, $http, $q) {
  $scope.getInvoices = function(){
      $scope.fetch();
  };
  
  $scope.fetch = function(){
  var deferred = $q.defer();
  $http.get('http://0.0.0.0:3000/api/invoices')
  .then(function successCallback(response) {
    deferred.resolve($scope.invoices = angular.fromJson(response.data));
    console.log(angular.fromJson(response.data));
  }, function errorCallback(error) {
    deferred.resolve($scope.invoices = angular.fromJson({}));
  });
  return deferred.promise;
};
}]);