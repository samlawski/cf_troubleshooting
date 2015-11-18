(function(){
  var app = angular.module('app', ['ngMaterial', 'ngSanitize', 'ng-showdown']).config(
    function($mdThemingProvider){
      $mdThemingProvider.theme('default')
        .primaryPalette('cyan')
        .accentPalette('blue-grey');
    }
  );

  //Initialize the sidebar
  app.controller('faqCtrl', ['$scope', '$http', '$location', '$anchorScroll', '$showdown', function($scope, $http, $location, $anchorScroll, $showdown){

    //get the file that contains the information about all the posts
    $http.get('posts.json').success(function(data){
      $scope.posts = data; //save the data to scope

      $scope.posts.forEach(function(post){
        //add slug property to post:
        post.slug = post.name.replace(/\s+/g, '-').toLowerCase();
        post.path = "posts/" + post.date.replace(/-/g, "") + post.number + "-" + post.slug + ".md";

        //add markdown file as article property:
        $http.get(post.path)
        .success(function(p){
          post.article = p;
        });//sucess
      });//loop
    });//http get

    //link to articles:
    $scope.scroll = function(id){
      $location.hash(id);
      $anchorScroll();
      // reset url:
      $location.hash("");
    };

  }]); //controller
})(); // app
