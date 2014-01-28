
skycalc.factory('PercentRate', [function() {

  return function (rateMeta) {

    var self = {};


    self.convert = function (value)  {

      return value.times(rateMeta.value);

    };


    return self;
    
  };

}]);
