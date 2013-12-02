skycalc.factory('XHRService', ['$http', function($http) {

  var self = {};

  self.Items = function(scope) {

    $http.get('/assets/json/items.json').success(function (data) {
      scope.items = data;
    });
  };


  return self;


}]);

skycalc.factory('VendorService', [function () {

  var self = [];

  self.push(skycalc.NewWebSource());


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
