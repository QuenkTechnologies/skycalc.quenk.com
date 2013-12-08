
skycalc.factory('PercentRate', [function() {

  return function (rateMeta) {

    var self = {};


    self.convert = function (value)  {

      console.log('PercentRate charge:' + value.times(rateMeta.value));
      console.log('Rate was: '+rateMeta.value);
      console.log('Value was: '+value);
      console.log(rateMeta.coo);
      return value.times(rateMeta.value);

    };


    return self;
    
  };

}]);
