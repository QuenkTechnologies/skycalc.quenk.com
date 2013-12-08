
skycalc.factory('Aggregate', ['PercentRate', 'Num',  function ($rate, $num) {


  /**
   *
   *
   *
   */
  return function(chargeMeta, fieldProvider) {

    var self = {};


    self.apply = function (schedule) {

      schedule.onFinshed(function (schedule) {
 
        schedule.include(chargeMeta.affinity, $rate(chargeMeta.rate).convert($num(schedule[chargeMeta.levy])));

      });


    };


    return self;

  };

}]);
