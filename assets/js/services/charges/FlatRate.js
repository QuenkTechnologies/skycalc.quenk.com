
skycalc.factory('FlatRate', [function () {

  return function (rateMeta) {

    var self = {};


    /**
     *
     * @param {Big} value
     */
    self.convert = function (value) {

      return Big(rateMeta.value);


    };


    return self;


  };

}]);
