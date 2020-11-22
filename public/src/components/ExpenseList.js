import React from "react";
import  { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
  <div className="container">
    <div className="list-header">
      <div className="show-mobile">Expenses</div>
      <div className="show-desktop">Expense</div>
      <div className="show-desktop">Amount</div>
    </div>
    <ul className="list-body">
      {
        props.expenses.length === 0 ? (
          <li className="list-item list-item--message">
            <span>No Expenses</span>
          </li>
        ) : (
          props.expenses.map((expense) => (
            <li key={expense.id}><ExpenseListItem {...expense} /></li>
          ))
        )
      }
    </ul>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
}

export default connect(mapStateToProps)(ExpenseList);