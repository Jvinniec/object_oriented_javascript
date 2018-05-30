
/* library.js */
var Car = function(loc) {
    this.loc = loc;
};
Car.prototype.move = function() {
    this.loc++;
};

var Van = function(loc) {
    Car.call(this, loc);
};
Van.prototype = Object.create(Car.prototype);
//Van.prototype.constructor = Van;

/* run.js */
var zed = new Car(3);
zed.move();

var amy = new Van(9);
console.log(amy.loc);
console.log(Van.prototype);
amy.move();
amy.grab();