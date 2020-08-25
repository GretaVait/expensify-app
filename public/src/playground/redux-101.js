import { createStore } from "redux";

// Action generators - that return actions object

const incrementCount = ({ incrementBy = 1 } = {}) => {
  return {
    type: 'INCREMENT',
    incrementBy: incrementBy
  };
}

const decrementCount = ({ decrementBy = 1 } = {}) => {
  return {
    type: 'DECREMENT',
    decrementBy: decrementBy
  };
}

const setCount = ({ count }) => {
  return {
    type: 'SET',
    count: count
  };
}

const resetCount = () => {
  return {
    type: 'RESET'
  };
}

// Reducer
// Reducers are pure functions - output determined by input (state, action)
// Never change state or action


const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
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
};

const store = createStore(countReducer);

store.subscribe(() => {
  console.log(store.getState());
});

// Unsubsribe from store.dispatch();
// const unsubscribe = store.subscribe(() => {
//   console.log(store.getState());
// });
// Actions - an object that gets sent to the store

// dispach() send the info
// store.dispatch(
//   {
//     type: 'INCREMENT',
//     incrementBy: 5
//   }
// );
// store.dispatch(
//   {
//     type: 'DECREMENT'
//   }
// );
// store.dispatch({
//   type: 'SET',
//   count: 101
// });
// store.dispatch(
//   {
//     type: 'RESET'
//   }
// );

store.dispatch(incrementCount({ incrementBy: 5 }));

//unsubscribe();

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));
