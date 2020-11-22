import React from "react";
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import expensesTotal from '../selectors/expenses-total';

// load a locale
numeral.register('locale', 'lt', {
  delimiters: {
    thousands: ' ',
    decimal: ','
  },
  currency: {
    symbol: '€'
  }
});

// switch between locales
numeral.locale('lt');

const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
  <Link to={`/edit/${id}`} className="list-item">
    <div>
      <h3 className="list-item__title">{description}</h3>
      <span className="list-item__subtitle">{moment(createdAt).format('YYYY-MM-DD')}</span>
    </div>
    <h3 className="list-item__data">{numeral(amount / 100).format('$0,0.00')}</h3>
  </Link>
);

export default ExpenseListItem;
