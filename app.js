// app.js

var nordstromApp = angular.module('nordstromApp', ['ngRoute']);


//set up routing
nordstromApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/products', {
            templateUrl: 'productList.html',
            controller: 'ProductListController'
        }).
        when('/products/:styleId', {
            templateUrl: 'productDetail.html',
            controller: 'ProductDetailController'
        }).
        otherwise({
            redirectTo: '/products'
        });
}]);


//initial function that runs once for setup/init
nordstromApp.run(['$rootScope', '$http', function($rootScope, $http) {
    if (!$rootScope.products) {
        $http.get('Database.json').success(function(data) {
            $rootScope.products = data;
        });
    }
}]);


nordstromApp.controller('ProductListController', [function() {
    //data should already be loaded at this point
}]);


nordstromApp.controller('ProductDetailController', ['$rootScope', '$scope', '$routeParams', function($rootScope, $scope, $routeParams) {
    if ($rootScope.products) {
        
        angular.forEach($rootScope.products, function(product) {
            //for debugging
            //console.log(product);
            if (product.style_id == $routeParams.styleId)
                $scope.product = product;
        });
        
        //for larger datasets maybe create a map of keys?
    }
}]);