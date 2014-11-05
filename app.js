// app.js

var nordstromApp = angular.module('nordstromApp', ['ngRoute']);


nordstromApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/products', {
            templateUrl: 'productList.html',
            controller: 'ProductListController'
        }).
        when('/products/:productId', {
            templateUrl: 'productDetail.html',
            controller: 'ProductDetailController'
        }).
        otherwise({
            redirectTo: '/products'
        });
}]);
                 


nordstromApp.controller('ProductListController', ['$scope', '$http', function ($scope, $http) {
    $http.get('Database.json').success(function(data) {
        $scope.products = data;
    });

    //$scope.orderProp = 'age';
}]);


nordstromApp.controller('ProductDetailController', ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.productId = $routeParams.productId;
    //$scope.
}]);