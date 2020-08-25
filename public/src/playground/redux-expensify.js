import { createStore, combineReducers } from "redux";

// -------------------------- //
// ---- Expenses Reducer ---- //
// -------------------------- //
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
} 
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
console.log(store.getState());

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