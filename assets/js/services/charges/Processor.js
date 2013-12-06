
/**
 * Aggregates the various charge for ONE vendor.
 */
skycalc.factory('Processor', ['$numParser', '$chargeProvider', 'Schedule',  function ($parser, $provider, newSchedule) {


  /**
   *
   * @param {Object} vendor An object containing meta data about the vendor.
   *
   */
  return function (vendor, fieldProvider) {

    var self = {};
    var schedule = newSchedule(vendor);



    /**
     *  
     *  Includes a value in the internal schedule.
     *
     *  @param {String} affinity The affinity of the entry (from the ngmodel fields).
     *  @param {Big} value The value of the entry.
     *
     */
    self.include = function (affinity, value) {

      schedule[affinity] = value.plus($parser.mustParse(schedule[affinity], 0));


    };

    self.applyCharge = function (type, chargeMeta) {

      $provider.createCharge(type, chargeMeta, fieldProvider).apply(schedule);

    };

    /**
     *
     * Called only once all vendor charges have been processed!
     * Customs an taxes will be applied at this point.
     * @param {Array} table An array that all information will be pushed to.
     */
    self.finish = function (table) {


      var price = fieldProvider.provide('price');
      schedule.duty = fieldProvider.provide('duty').times(price);
      schedule.tax = fieldProvider.provide('tax').times(price);
      schedule.finished();

      schedule.total = schedule.tax.plus(schedule.duty).plus(schedule.fee);
      
      table.push(schedule);


    };










    return self;


  };



}]);
