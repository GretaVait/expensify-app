import expensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should add up multiple expenses', () => {
  const result = expensesTotal(expenses);
  expect(result).toBe( expenses[0].amount + expenses[1].amount + expenses[2].amount )
});

test('should add a single expense', () => {
  const result = expensesTotal([ expenses[0] ]);
  expect(result).toBe( expenses[0].amount )
});

test('should return 0 if no expenses', () => {
  const result = expensesTotal([ ]);
  expect(result).toBe( 0 )
});