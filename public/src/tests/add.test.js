const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello, ${name}!`;

test('add two numbers', () => {
  const result = add(5, 2);

  expect(result).toBe(7);

  // if (result !== 7) {
  //   throw new Error(`You added 5 and 2. The result was ${result}. Expect 7`)
  // }
});

test('generate greeting', () => {
  const result = generateGreeting('Ted');
  expect(result).toBe('Hello, Ted!');
})

test('generate greeting for no name', () => {
  const result = generateGreeting();
  expect(result).toBe('Hello Anonymous!');
})