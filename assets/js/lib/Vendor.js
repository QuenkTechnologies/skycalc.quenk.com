var skycalc = skycalc || {};

skycalc.Vendor = function (details) {

  var self = {};

  self.details = details || {};

  self.setPrice = function (price) {
 
    details.price = price;

    return self;

  };

  self.calculateDutyCharge = function (duty) {
 
   details.duty = duty;

    return self;

  };

  self.calculateTaxCharge = function (tax) {

    details.tax = tax;

    return self;

  };

  self.calculateWeightCharge = function () {

    return self;

  };

  self.calculateDimensionCharge = function () {

    return self;

  };

  self.calculateFuel = function () {

    return self;


  };

  self.calculateFee = function () {

    return self;

  };

  self.publish = function (table) {

    details.total = details.tax.plus(details.duty).plus(details.price);
    table.push(details);


  };

  return self;

};

