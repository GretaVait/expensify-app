//---- Person task ----//
// import isSenior, { isAdult, canDrink } from './person'; 
// console.log('Adult:', isAdult(18), 'Can Drink:', canDrink(18), 'Senior Citizen:', isSenior(99));

//---- Utilietis task ----//
// import './utils';
// import subtract, { square, add } from './utils';

// console.log(subtract(6, 4));

//---- Validate Email ----//
// import validator from 'validator';
// console.log(validator.isEmail('test@gmail.com'));

//---- Statless functional component ----//
// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };

//---- React App ----//
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.sass';

ReactDOM.render(<IndecisionApp />, document.querySelector("#app"));