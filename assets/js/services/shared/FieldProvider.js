
skycalc.factory('FieldProvider', ['$numParser', function ($parser) {

  /**
   *
   * @param {Object} fields The ng-model object <ngmodel> that the fields are bound to.
   * I believe this is currently the $scope.classSelected nonsense.
   */
  return function (fields) {

    var self = {};


    /**
     * 
     * Attempts to provide a field that is supposed to exist on $scope.<ngmodel>.
     *
     * @param {String} The field name.
     *
     */ 
    self.provide = function (field) {

      return $parser.mustParse(fields[field]);


    };



    return self;


  };

}]);
