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
      for(i=0;i<$scope.posts.length;++i){
        $http.get("posts/" + $scope.posts[i].date + $scope.posts[i].number + "_" + $scope.posts[i].name + ".md")
        .then(function(post){
          $scope.all_posts.unshift(post.data);//unshift = reversed push
        });
      };
    });

    //link to answers:
    $scope.scroll = function(id){
      $location.hash(id);
      $anchorScroll();
      //reset url
      //$location.hash("");
    };

    //show subheaders
    // $scope.previousModule = 0;
    //
    // $scope.showModule = function(module){
    //   showHeader = (module!=$scope.previousModule);
    //   //console.log(showHeader);
    //   $scope.previousModule = module;
    //   return showHeader;
    // };

  }]); //controller

})(); // app
