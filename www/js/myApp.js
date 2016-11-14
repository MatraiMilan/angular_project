var myApp = angular.module('myApp', []);
myApp.controller('repeatController', function ($scope) {
    $scope.repeatString = function () {

        var x = "";
        for (var i = 0; i < $scope.repeatNumber; i++){
             x += $scope.textToRepeat;
        }
        $scope.textToRepeat = x;

        console.log(x);
    }
})