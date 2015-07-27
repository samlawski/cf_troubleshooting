(function(){
  var app = angular.module('app', ['ngMaterial']).config(
    function($mdThemingProvider){
      $mdThemingProvider.theme('default')
        .primaryPalette('grey')
        .accentPalette('teal');
    }
  );

  //Initialize the sidebar
  app.controller('faq', ['$scope', '$location', '$anchorScroll', function($scope, $location, $anchorScroll){
    $scope.scroll = function(id){
      console.log(id);
      $location.hash(id);
      $anchorScroll();
    };
  }]);

})();
