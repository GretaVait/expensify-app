import React from "react";
import  { connect } from 'react-redux';
import selectExpenseTotal from '../selectors/expenses-total';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';

const ExpenseSummary = ( {expenseCount, expenseTotal} ) => {
  const expenseWord = expenseCount == 1 ? 'expense' : 'expenses';
  return (
    <div className="page-header">
      <p>Viewing {expenseCount} {expenseWord} in total {numeral(expenseTotal / 100).format('$0,0.00')}</p>
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