
skycalc.controller('Main', ['$scope', 'XHRService','FieldProvider', 'Processor', function (scope, $xhr,newFieldProvider, newProcessor) {

  scope.table = [];

  scope.MONEY_PATTERN = /^\d+(\.\d{0,2})?$/;
  scope.METRIC_PATTERN = /^\d+(\.\d{0,2})?$/;

  $xhr.Items(scope);


  scope.update = function () {

  var fieldProvider = newFieldProvider(scope.classSelected);

  $xhr.Vendors(function (vendor) {
 
    var $processor = newProcessor(vendor.meta, fieldProvider);
 
    angular.forEach(vendor.chargeMeta, function (charge) {
 
      $processor.applyCharge(charge.type, charge, fieldProvider);


    });

    $processor.finish(scope.table);

  });
  scope.table = [];



  };


}]);
