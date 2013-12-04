skycalc.factory('XHRService', ['$http', function($http) {

  var self = {};

  self.Items = function(scope) {

    $http.get('/assets/json/items.json').success(function (data) {
      scope.items = data;
    });
  };

  self.Vendors = function (f) {

    $http.get('/assets/json/vendors.json', {cache:true}).success(function (data) {

      angular.forEach(data, f);

    });


  };


  return self;


}]);

skycalc.factory('VendorService', [function () {

  var self = [];

  self.push(skycalc.WebSource());
  self.push(skycalc.Lpkpak());
  self.push(skycalc.CaribbeanExpress());


  return self;

}]);

/**
 * 
 * Provides some functions for converting primitives to Big.js objects.
 * 
 */
skycalc.factory('BigService' , [function() {

  var self = {};

  self.charge = function (value, rate) {

     value = self.mustHaveValue(value);
     rate = self.mustHaveValue(rate);

    return value.times(rate.valueOf());


  };

  self.mustHaveValue = function (value, defaultValue) {

    var defaults = defaultValue || 0;

    if(isNaN(value)) { return Big(defaults); }

    return Big(value);


  };

  return self;

}]);
