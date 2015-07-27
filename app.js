(function(){
  var app = angular.module('app', ['ngMaterial']).config(
    function($mdThemingProvider){
      $mdThemingProvider.theme('default')
        .primaryPalette('grey')
        .accentPalette('teal');
    }
  );

  //Initialize the sidebar
  app.controller('faqCtrl', ['$scope', '$http', '$location', '$anchorScroll', function($scope, $http, $location, $anchorScroll){
    // access faq
    $http.get('/faq.json').success(function(data){
      $scope.faq = data;
    });

    //link to answers:
    $scope.scroll = function(id){
      $location.hash(id);
      $anchorScroll();
      //reset url
      $location.hash("");
    };

  }]);

})();
