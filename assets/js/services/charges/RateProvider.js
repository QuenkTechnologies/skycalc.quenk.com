
skycalc.factory('$rateProvider', ['FlatRate', function (newFlatRate) {

  return {


    /**
     *
     * @param {Object} obj The rate object from the json file.
     */
    provide : function (obj) {

      //Start the mayhem here :/

      if(obj.type == 'FlatRate') { return newFlatRate(obj); }

    }



  };

}]);
