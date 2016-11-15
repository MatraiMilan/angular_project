var myApp = angular.module('myApp', []);
myApp.controller('asideMenuCtrl', function ($scope, $rootScope) {
    $rootScope.dataArray = [];
    // console.log(element(by.binding('radio')));
    $scope.addDataToTable = function () {
        var money = $scope.money;
        console.log($scope);
        if ($scope.radio == "expense"){
            console.log("is it run??")
            money = money * -1;
        }
        var obj = {
            money: money,
            date: $scope.date,
            desc: $scope.desc
        };
        console.log(obj);
        $rootScope.dataArray.push(obj);
    }
})

myApp.controller('tableController', function () {

})