
skycalc.factory('Aggregate', ['PercentRate', function ($rate) {


  /**
   *
   *
   *
   */
  return function(chargeMeta, fieldProvider) {

    var self = {};


    self.apply = function (schedule) {

      schedule.onFinshed(function (schedule) {

        schedule.include(chargeMeta.affinity, $rate(chargeMeta.rate).convert(Big(schedule[chargeMeta.levy])));



      });


    };


    return self;

  };

}]);
