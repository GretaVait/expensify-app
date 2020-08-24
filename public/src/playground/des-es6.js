// ------------------------------ //
// ---- Object destructuring ---- //
// ------------------------------ //
// const person = {
//   name: "Gret",
//   age: 21,
//   location: {
//     city: "Box",
//     temp: 100000
//   }
// }

// let { name: firstName = "Anonymous", age } = person;

// console.log(`${firstName} is ${age} years old.`);

// const { city, temp: temprature } = person.location;

// if (city && temprature) {
//   console.log(`It's ${temprature} degrees in ${city}`);
// }

// const book = {
//   title: 'Plaukas subinėje',
//   author: 'Greta Wheta',
//   publisher: {
//     name: 'Teddy Bear'
//   }
// }

// const { title: bookTitle = 'Untitled', author = 'Unknown' } = book;
// const { name: publisherName = 'Self-published' } = book.publisher;

// console.log(`This book is called ${bookTitle}, author ${author} and published by ${publisherName}.`);

// ----------------------------- //
// ---- Array destructuring ---- //
// ----------------------------- //
const address = [
  'Sunshine Street 852',
  'Los Santos',
  'California',
  '45612'
];

// 1-praleistas, 2-aprasytas, 3-aprasytas, 4-praleistas
const [, city, state = 'New York'] = address;

console.log(`You are in ${city} ${state}.`);

const item = [
  'Coffee (hot)',
  '$2.00',
  '$2.50',
  '$2.75'
];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);