
skycalc.factory('Schedule', ['$numParser', function ($parser) {


  /**
   *
   * ChargeMemo allows us to keep record of charges that have been included.
   *
   * We then make this information available to subsequent charges.
   *
   * @pararm {Object} meta Any data we want predefined.
   */
  return function (meta) {

    var self = meta || {};
    var delayed = [];
    var charges = [];



    /**
     *  
     *  Includes a value in the schedule.
     *
     *  @param {String} affinity The affinity of the entry (from the ngmodel fields).
     *  @param {Big} value The value of the entry.
     *
     */
    self.include = function (affinity, value) {

      self[affinity] = value.plus($parser.mustParse(self[affinity], 0));


    };


    /**
     *
     *  Will execute the passed function after all calculations are done.
     *
     */
    self.onFinshed = function (f) {

      delayed.push(f);

    };

    self.finished = function () {

      angular.forEach(delayed, function (charge) {

        charge(self);

      });




    };


    return self;



  };


}]);
