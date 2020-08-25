import { createStore, combineReducers } from "redux";
import { v4 as uuidv4 } from 'uuid';

// --------------------- //
// ---- ADD_EXPENSE ---- //
// --------------------- //
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuidv4(),
    description,
    note,
    amount,
    createdAt
  }
});

// ------------------------ //
// ---- REMOVE_EXPENSE ---- //
// ------------------------ //
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// ---------------------- //
// ---- EDIT_EXPENSE ---- //
// ---------------------- //
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});


// -------------------------- //
// ---- Expenses Reducer ---- //
// -------------------------- //
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ]
    case 'REMOVE_EXPENSE':
      return state.filter(expense => expense.id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            //grab all props from existing expense obj (id, description etc.) and overide with new values
            ...expense,
            ...action.updates
          }
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
} 

// ------------------------- //
// ---- SET_TEXT_FILTER ---- //
// ------------------------- //
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// ------------------------- //
// ---- Filters Reducer ---- //
// ------------------------- //
const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    default:
      return state;
  }
}

// ------------------------ //
// ---- Store Creation ---- //
// ------------------------ //
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filter: filterReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }));

store.dispatch(removeExpense({
  id: expenseOne.expense.id
}))

store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());

// -------------- //
// ---- Demo ---- //
// -------------- //
const demoState = {
  expenses: [{
    id: 'abc852',
    description: 'July Rent',
    note: 'This is the final payment',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'date', // date or amount
    startDate: undefined,
    endDate: undefined
  }
}

// const user = {
//   name: 'Gret',
//   age: 100
// };

// console.log({
//   age: 10,
//   ...user,
//   location: 'Namai',
// });