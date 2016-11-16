var myApp = angular.module('myApp', []);
myApp.controller('asideMenuCtrl', function ($scope, $rootScope) {
    $rootScope.dataArray = [];
    var balance = 0;
    // console.log(element(by.binding('radio')));
    $scope.addDataToTable = function () {
        var money = Number($scope.money);
        if(!isNaN(money)) {
            console.log($scope);
            if ($scope.radio == "expense") {
                money = money * -1;
            }
            var obj = {
                money: money,
                date: $scope.date,
                desc: $scope.desc
            };
            console.log(obj);
            $rootScope.dataArray.push(obj);
            balance += money;

            $scope.balance = balance;
        }
    }

    $scope.resetDataArray = function () {
        var conf = confirm("All of the table data will be deleted.");
        if(conf){
            $rootScope.dataArray = [];
            balance = 0;
            $scope.balance = balance;
        }
    }
});

myApp.controller('tableController', function () {

})