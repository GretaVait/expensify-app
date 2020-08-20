

class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    //return 'Hi, I am ' + this.name + '!';
    return `Hi, I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}`;
    }

    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, location) {
    super(name, age, location);
    this.location = location;
  }
  hasLocation() {
    return !!this.location;
  }
  getGreeting() {
    let greeting = super.getGreeting();

    if (this.hasLocation()) {
      greeting += ` I am visiting from ${this.location}.`;
    }

    return greeting;
  }
}

const me = new Traveler('Gretuliukas Burbuliukas', 21, 'Kaunas');

console.log(me.getGreeting());

const ted = new Traveler(undefined, undefined, 'Nowhere');
console.log(ted.getGreeting());