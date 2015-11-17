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

    //empty array will contain all the actual posts
    $scope.all_posts = [];

    //get the file that contains the information about all the posts
    $http.get('posts.json').success(function(data){
      $scope.posts = data; //save the data to scope

      //for each post: push post to the scope array of all posts
      $scope.posts.forEach(function(post){
        //add slug to posts JSON
        post.slug = post.name.replace(/\s+/g, '-').toLowerCase();

        $http.get("posts/" + post.date.replace(/-/g, "") + post.number + "_" + post.name.replace(/\s+/g, '_').toLowerCase() + ".md")
        .success(function(p){
          $scope.all_posts.unshift({
            post: p,
            date: post.date,
            name: post.name,
            slug: post.slug
          });//unshift = reversed push
        });//sucess
      });//loop
    });//http get

    //link to answers:
    $scope.scroll = function(id){
      $location.hash(id);
      $anchorScroll();
      //reset url
      //$location.hash("");
    };

  }]); //controller

})(); // app
