'use strict';

class Animal {
  static alive = [];

  constructor(health = 100, name) {
    this.health = health;
    this.name = name;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(health, name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(health, name);
  }

  bite(animal) {
    if (!(animal instanceof Carnivore) && !animal.hidden) {
      animal.health -= 50;

      if (animal.health <= 0) {
        Animal.alive = Animal.alive.filter((a) => a !== animal);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
