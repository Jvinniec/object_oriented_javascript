
var Planet = function(r,m) {
    this.radius = r;
    this.mass = m;
};

Planet.prototype.volume = function() {
    return power(this.radius,3);
};

Planet.prototype.density = function() {
    return (4./3.)*3.14159*power(this.mass,2)*power(this.radius,3);
}

// Raise value to a given integer power
var power = function(val, pow) {
    var ret = 1;
    while(pow-- > 0) {
        ret *= val;
    }
    return ret;
}

var PlanetA = new Planet(1,2);
var PlanetB = new Planet(1,3);

console.log(PlanetA.volume());
console.log(PlanetB.volume());
console.log(PlanetA.density());
console.log(PlanetB.density());