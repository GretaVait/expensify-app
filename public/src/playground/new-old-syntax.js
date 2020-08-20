class OldSyntax {
  constructor() {
    this.name = 'Gret';
    this.getGreeting = this.getGreeting.bind(this);
  }
  getGreeting() {
    return `Hi. My name is ${this.name}.`;
  }
}

const oldSyntax = new OldSyntax();
const oldGetGreeting = oldSyntax.getGreeting;

console.log(oldGetGreeting());

// -------------

class NewSyntax {
  name = 'Ted';
  getGreeting = () => {
    return `Hi. My name is ${this.name}.`;
  }
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;

console.log(newGetGreeting());