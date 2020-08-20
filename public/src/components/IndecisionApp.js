import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  //------- STATES -------//
  state = {
    options: [],
    selectedOption: undefined
  };
  //------- METHODS -------//
  handleDeleteOptions = () => {
    // this.setState(() => {
    //   return {
    //     options: []
    //   };
    // });

    // same thing as above as below

    this.setState(() => ({ options: [] }));
  }
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }))
  }
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    
    this.setState(() => ({
      selectedOption: option
    }))
  }
  handleAddOption = (option) => {
    if (!option) {
      return "Enter valid value to add an item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }

    // this.setState((prevState) => {
    //   return {
    //     options: prevState.options.concat(option)
    //   };
    // });

    this.setState((prevState) => ({ options: prevState.options.concat(option) }));
  }
  handleClearSelectedOption = () => {
    this.setState(() => ({
      selectedOption: undefined
    }))
  }
  //------- LIFE CYCLES -------//
  // when component first gets mounted to the DOM
  componentDidMount() {
    //fetching data
    try {
      const json = localStorage.getItem('options');
    
      if (json) {
        const options = JSON.parse(json);
        this.setState(() => {
          return {
            options: options
          }
        });
      }
    } catch (e) {
      //do nothing
    }

  }

  // when component updates - state or prop value changes
  componentDidUpdate(prevProps, prevState) {
    //saving data
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  //when component goes away
  componentWillUnmount() {
    console.log('compWillUnmount');
  }
  //------- RENDER -------//
  render() {
    const subtitle = 'Put your life in the hands of computer!';

    return (
      <div>
        <Header subtitle={subtitle} />
        <main className="container">
          <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
          <div className="widget">
            <Options 
              options={this.state.options} 
              handleDeleteOptions={this.handleDeleteOptions} 
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
          <OptionModal selectedOption={this.state.selectedOption} handleClearSelectedOption={this.handleClearSelectedOption} />
        </main>
      </div>
    );
  }
}

