
skycalc.controller('Main', ['$scope', 'XHRService', 'VendorService', 'FieldProvider',  function (scope, $xhr, $ve, newFieldProvider) {

  
  scope.table = [];

  scope.NUMBER_PATTERN = /^\d+(\.\d{0,2})?$/;

  $xhr.Items(scope);


  scope.update = function () {
  var $fields = newFieldProvider(scope.classSelected);
console.log($fields.provide('weight')+"");
//    scope.table = [];
//
//    var s = scope.classSelected;
//    console.log(s);
//    angular.forEach($ve, function (o, key) {
//      o.setPrice($big.mustHaveValue(s.price)).
//      calculateDutyCharge($big.charge(s.duty, s.price)).
//      calculateTaxCharge($big.charge(s.tax, s.price)).
//      calculateWeightCharge($big.mustHaveValue(s.weight)).
//      calculateDimensionCharge
//      ($big.mustHaveValue(s.width),$big.mustHaveValue(s.length), $big.mustHaveValue(s.height)).
//      calculateFuel(s).
//      calculateFee(s).
//      publish(scope.table);
////
//    });



  };





}]);
