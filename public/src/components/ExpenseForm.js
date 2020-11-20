import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

// const date = new Date();
const now = moment();

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }
  
  onDescriptionChange = (e) => {
    const inputDescription = e.target.value;
    this.setState(()=>({
      description: inputDescription
    }));
  }

  onNoteChange = (e) => {
    const inputNote = e.target.value;
    this.setState(() => ({
      note: inputNote
    }));
  }

  onAmountChange = (e) => {
    const inputAmount = e.target.value;
    if (inputAmount.match(/^(((0)))(\.\d{0,2})?$|^((?!(0))[0-9]*)(\.\d{0,2})?$/)) {
      if (inputAmount.match(/^\./)) {
        this.setState(() => ({
          amount: '0.'
        }));
      } else {
        this.setState(() => ({
          amount: inputAmount
        }));
      }
    }
  }

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({
        createdAt: createdAt
      }));
    }
  };

  onFocusChange = ({focused}) => {
    this.setState(() => ({
      calendarFocused: focused
    }));
  }

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      // Set error state
      this.setState(() => ({
        error: 'Please provide description and amount!'
      }));
    } else {
      // Clear the error
      this.setState(() => ({
        error: ''
      }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      })
    }
  }

  render () {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input className="text-input" type="text" placeholder="Description" autoFocus value={this.state.description} onChange={this.onDescriptionChange} />
          <input className="text-input" type="text" placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange} />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange} 
            focused={this.state.calendarFocused} 
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={ () => {false} }
          />
          <textarea className="textarea" placeholder="Add a note for your expense (optional)" value={this.state.note} onChange={this.onNoteChange}></textarea>
          <button>{this.props.expense ? "Edit Expense" : "Add Expense"}</button>
        </form>
      </div>
    )
  }
}