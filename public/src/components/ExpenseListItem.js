import React from "react";
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

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
  <div>
    <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
    <p>
      Amount: {numeral(amount / 100).format('$0,0.00')}
      <br />
      Created at: {moment(createdAt).format('YYYY-MM-DD')}
    </p>
  </div>
);

export default ExpenseListItem;
