(function(){
  var app = angular.module('app', ['ngMaterial']).config(
    function($mdThemingProvider){
      $mdThemingProvider.theme('default')
        .primaryPalette('grey')
        .accentPalette('teal');
    }
  );

  //Initialize the sidebar
  app.controller('AppCtrl', ['$scope', function($scope){

  }]);

})();
