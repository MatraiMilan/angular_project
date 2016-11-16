var expect = chai.expect;

describe("Testing", function () {
    it("is running properly", function () {

    });
});

describe("myApp", function () {
    beforeEach(function () {
       module("myApp");
    });

    it("has asideMenuCtrl controller", inject(function ($controller) {
        var c = $controller('asideMenuCtrl', { $scope: {}});
        expect(c).to.exist;
    }));

    it("'s asideMenuCtrl has an addDataToTable method", inject(function ($controller) {
        var scope = {};
        var c = $controller('asideMenuCtrl', { $scope: scope});

        console.log(scope);
        expect(scope.addDataToTable).to.exist;
        expect(scope.addDataToTable).to.be.a('function')
    }));

    it("asideMenuCtrl's addDataToTable() works properly", inject(function ($controller) {
        var newRecord = {};

        var scope = {};
        var rootScope = {};

        var c = $controller('asideMenuCtrl', {
            $scope: scope,
            $rootScope : rootScope
        });

        expect(rootScope.dataArray).to.be.instanceOf(Array);
        expect(rootScope.dataArray.length).to.equal(0);

        expect(scope.addDataToTable()).to.not.throw;

        expect(rootScope.dataArray.length).to.equal(1);



    }));

});


