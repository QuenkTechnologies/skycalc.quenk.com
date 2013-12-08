
skycalc.factory('Num', [function () {

  return function (val, defaultVal) {

    if(isNaN(val)) {val = 0;}

    return Big(val);

  };

}]);
