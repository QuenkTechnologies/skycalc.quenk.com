
skycalc.factory('$numParser', [function () {

  return {

    /**
     * Always return a Big! Even if it is 0!
     */
    mustParse : function (num, defaultNum) {

      var defaultn = defaultNum || 0;
 
      if(isNaN(num)) { return Big(defaultn); }

      if(num === null) { return Big(defaultn); }
      return Big(num);

    }

  };




}]);
