import { createStore } from "redux";

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      };
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
});

store.subscribe(() => {
  console.log(store.getState());
});

// Unsubsribe from store.dispatch();
// const unsubscribe = store.subscribe(() => {
//   console.log(store.getState());
// });
// Actions - an object that gets sent to the store

// Increment the count
// dispach() send the info
store.dispatch(
  {
    type: 'INCREMENT',
    incrementBy: 5
  }
);

//unsubscribe();

store.dispatch(
  {
    type: 'INCREMENT'
  }
);

// Reset the count
store.dispatch(
  {
    type: 'RESET'
  }
);

// Decrement the count
store.dispatch(
  {
    type: 'DECREMENT'
  }
);

store.dispatch(
  {
    type: 'DECREMENT',
    decrementBy: 10
  }
);

store.dispatch({
  type: 'SET',
  count: 101
});