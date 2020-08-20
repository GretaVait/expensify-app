// const isAdult = (age) => age >= 18;
const isAdult = (age) => {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

// const canDrink = (age) => age >= 20;
const canDrink = (age) => {
  if (age >= 20) {
    return true;
  } else {
    return false;
  }
}

const isSenior = (age) => age >= 65;

export { isAdult, canDrink, isSenior as default};