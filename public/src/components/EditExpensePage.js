import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, startEditExpense } from '../actions/expenses';
import { removeExpense, startRemoveExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h2 className="page-header__title">Edit Expense</h2>
        </div>
      </div>
      <div className="container">
        <ExpenseForm expense={props.expense} onSubmit={(expense) => {
          props.dispatch(startEditExpense(props.expense.id, expense));
          props.history.push('/');
        }} />
        <button className="btn btn--primary btn--primary--red" onClick={()=>{
          props.dispatch(startRemoveExpense({id: props.expense.id}));
          props.history.push('/');
        }}>Remove Expense</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    // find the single item in the array
    expense: state.expenses.find((expense) => {
      return expense.id === props.match.params.id
    })
  }
}

export default connect(mapStateToProps)(EditExpensePage);
