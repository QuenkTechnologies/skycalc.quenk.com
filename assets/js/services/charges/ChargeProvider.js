
skycalc.factory('$chargeProvider', ['Range', 'Aggregate', function ($range, $aggregate) {


  return {

    createCharge : function (type, chargeMeta, fieldProvider) {
 
      //Begin the horror :O
      
      if(type == 'Range') { return $range(chargeMeta, fieldProvider); }
      if(type == 'Aggregate') { return $aggregate(chargeMeta, fieldProvider);}

    }

  };



}]);
