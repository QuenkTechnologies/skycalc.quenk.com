/**
 *
 * Range is used to calculate charges that fall within a specific range of values.
 *
 */
skycalc.factory('Range', ['$rateProvider', function (rateProvider){

  return function (chargeMeta, fieldProvider) {

    var self = {};

    self.apply = function (schedule) {
console.log(chargeMeta);
      var value = fieldProvider.provide(chargeMeta.levy);

      if(value.gte(chargeMeta.low)){

        if(chargeMeta.high === 0.0) {

          schedule.include(
            chargeMeta.affinity, 
            rateProvider.
            provide(chargeMeta.rate)
            .convert(value)
            );
        }

        if(value.lte(chargeMeta.high)){

          var rate = rateProvider.provide(chargeMeta.rate);

          schedule.include(chargeMeta.affinity, rate.convert(value));


        }

      }







    };

    


    return self;



  };





}]);
