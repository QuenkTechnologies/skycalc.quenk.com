
skycalc.factory('$chargeProvider', ['Range', function ($range) {


  return {

    createCharge : function (type, chargeMeta, fieldProvider, processor) {
 
      //Begin the horror :O
      
      if(type == 'Range') { return $range(chargeMeta, fieldProvider, processor); }

    }

  };



}]);
