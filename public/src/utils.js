console.log('utils');

// named exports
export const square = (x) => x * x;
export const add = (a, b) => a + b;

// default exports
const subtract = (a, b) => a - b;
export default subtract;

//export { square, add, subtract as default};