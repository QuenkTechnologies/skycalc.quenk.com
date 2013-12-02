
skycalc.controller('Main', ['$scope', 'XHRService', 'VendorService', 'BigService',  function (scope, $xhr, $ve, $big) {

  scope.table = [];

  scope.NUMBER_PATTERN = /^\d+(\.\d{0,2})?$/;

  $xhr.Items(scope);

  scope.update = function () {

    scope.table = [];

    var s = scope.classSelected;
    angular.forEach($ve, function (o, key) {
      o.setPrice($big.mustHaveValue(s.price)).
      calculateDutyCharge($big.charge(s.duty, s.price)).
      calculateTaxCharge($big.charge(s.tax, s.price)).
      calculateWeightCharge($big.mustHaveValue(s.weight)).
      calculateDimensionCharge
      ($big.mustHaveValue(s.width),$big.mustHaveValue(s.length), $big.mustHaveValue(s.height)).
      calculateFuel(s).
      calculateFee(s).
      publish(scope.table);

    });



  };





}]);
