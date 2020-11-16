import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });

  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action);

  expect(state).toEqual([ expenses[0], expenses[2] ]);
})

test('should  not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }
  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
})

test('should add an expense', () => {
  const expenseData = {
    description: 'Rent', 
    amount: 109500,
    createdAt: 1000,
    note: 'This was last months rent'
  };

  const action = {
    type: 'ADD_EXPENSE',
    expense: expenseData
  }

  const state = expensesReducer(expenses, action);

  expect(state).toEqual([ ...expenses, expenseData ]);
})

test('should edit expense by id', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      description: 'New Description'
    }
  }
  const state = expensesReducer(expenses, action);
  expect(state[1].description).toBe( 'New Description' );
})

test('should not edit expense if id not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      description: 'New Description'
    }
  }
  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
})

test('should set expenses', () => {
  const expenseData = {
    description: 'Rent', 
    amount: 109500,
    createdAt: 1000,
    note: 'This was last months rent'
  }

  const action = {
    type: 'SET_EXPENSES',
    expenses: expenseData
  }

  const state = expensesReducer(expenses, action);

  expect(state).toEqual( expenseData );
})