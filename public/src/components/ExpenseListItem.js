import React from "react";
import { Link } from 'react-router-dom';


const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
  <div>
    <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
    <h4>Amount: {amount}</h4>
    <p>Created At: {createdAt}</p>
  </div>
);

export default ExpenseListItem;
