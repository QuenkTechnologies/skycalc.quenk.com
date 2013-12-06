
skycalc.factory('$rateProvider', ['FlatRate', 'PercentRate', function (newFlatRate, newPercentRate) {

  return {


    /**
     *
     * @param {Object} obj The rate object from the json file.
     */
    provide : function (obj) {

      //Start the mayhem here :/

      if(obj.type == 'FlatRate') { return newFlatRate(obj); }
      if(obj.type == 'PercentRate') { return newPercentRate(obj); }

    }



  };

}]);
