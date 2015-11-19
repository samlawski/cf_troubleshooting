(function(){
  var app = angular.module('app', ['ngMaterial', 'ngSanitize', 'ng-showdown']).config(
    function($mdThemingProvider){
      $mdThemingProvider.theme('default')
        .primaryPalette('lime')
        .accentPalette('blue-grey');
    }
  );

  app.factory('Posts', ['$http', '$showdown', function($http, $showdown){
    
  }]);

  app.controller('faqCtrl', ['$scope', '$http', '$location', '$anchorScroll', '$showdown', function($scope, $http, $location, $anchorScroll, $showdown){

    // get the file that contains the information about all the posts
    $http.get('posts.json').then(function(posts){
      $scope.posts = posts.data; //with '.then' 'posts' is an object

      $scope.posts.forEach(function(post){
        // add slug property to post:
        post.slug = post.name.replace(/\s+/g, '-').toLowerCase();
        post.path = "posts/" + post.date.replace(/-/g, "") + post.number + "-" + post.slug + ".md";

        // add markdown file as article property:
        $http.get(post.path).then(function(p){
          post.article = p.data;
        });// :end http get
      });// :end forEach
    });// :end http get

    //link to articles:
    $scope.scroll = function(id){
      $location.hash(id);
      $anchorScroll();
      // reset url:
      $location.hash("");
    };

  }]); // :end controller
})(); // :end app
