angular.module('app').
  controller('main',function ($scope) {
      $scope.showContent = function($fileContent){
        $scope.content = $fileContent;
        var array = $scope.content;
        var splited = array.split(" ",5);

         console.log(splited);
      };
  });
