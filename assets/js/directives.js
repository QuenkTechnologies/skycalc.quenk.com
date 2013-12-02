
skycalc.directive('bignum', [function () {

  var makeBig = function (value) {

    return Big(value);

  };

  return {

    require: 'ngModel',
    link: function (x,y,z, ctrl) {

      ctrl.$parsers.unshift(makeBig);


    }


  };


}]);
