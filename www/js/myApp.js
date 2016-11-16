var myApp = angular.module('myApp', []);

myApp.controller('asideMenuCtrl', function ($scope, $rootScope, storageService) {

    $rootScope.dataArray = [];


    var currentId = 0;
    var balance = 0;

    $scope.addDataToTable = function () {
        var money = Number($scope.money);
        if (!isNaN(money)) {
            console.log($scope);
            if ($scope.radio == "expense") {
                money = money * -1;
            }
            var obj = {
                money: money,
                date: $scope.date,
                desc: $scope.desc,
                id: currentId++
            };

            $rootScope.dataArray.push(obj);
            $rootScope.dataArray.sort(function (a, b) {
                if (a.date < b.date) {
                    return 1;
                } else if (a.date > b.date) {
                    return -1;
                } else {
                    return 0;
                }
            })

            balance += money;

            $scope.balance = balance;
        }
    }

    $scope.resetDataArray = function () {
        var conf = confirm("All of the table data will be deleted.");
        if (conf) {
            $rootScope.dataArray = [];
            balance = 0;
            $scope.balance = balance;
            currentId = 0;
        }
    }

    $scope.deleteRow = function (id) {

        for (var i = 0; i < $rootScope.dataArray.length; i++) {
            if (id == $rootScope.dataArray[i].id) {
                $rootScope.dataArray.splice(i, 1);
                            }
        }
    }
});


myApp.service('storageService', storageServiceMemory);

function storageServiceMemory() {
    var storage = [];


    function addDataToTable(obj) {
        storage.push(obj);
    }

    function listRecords() {
        return storage.slice();
    }


    this.addDataToTable = addDataToTable;
    this.listRecords = listRecords;

}