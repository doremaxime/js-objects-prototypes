'use strict';

const usePower = function () {
  return this._power;
};

const Hero = function (name, alias, power) {
  this.name = name;
  this.alias = alias;
  this._power = power;
  this.usePower = usePower;
};

let batman = new Hero {'batman', 'bruce wayne', 'fights crime'};
let superman = new Hero {'superman', 'maxime dore', 'flies'};


module.exports = Hero;
