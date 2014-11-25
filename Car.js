function Car(make, model, year, color, seats){
  this.make = make;
  this.model = model;
  //TODO: add year, color, seats here

  this.running = false;
  this.owner = "manufacturer";
  this.previousOwners = [];
}

Car.prototype.sell = function(newOwner){

};

Car.prototype.paint = function(newColor){

};








// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;