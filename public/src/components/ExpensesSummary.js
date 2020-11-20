import React from "react";
import  { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectExpenseTotal from '../selectors/expenses-total';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';

const ExpenseSummary = ( {expenseCount, expenseTotal} ) => {
  const expenseWord = expenseCount == 1 ? 'expense' : 'expenses';
  return (
    <div className="page-header">
      <div className="container">
        <h2 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} in total <span>{numeral(expenseTotal / 100).format('$0,0.00')}</span></h2>
        <div className="page-header__actions">
          <Link className="btn btn--primary" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expenseTotal: selectExpenseTotal(visibleExpenses)
  };
}

export default connect(mapStateToProps)(ExpenseSummary);