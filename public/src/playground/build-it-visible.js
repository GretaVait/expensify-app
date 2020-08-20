// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// };

// let visibility = false;

// const render = () => {
//   const visiblityToggle = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? 'Hide details' : 'Show details'}
//       </button>
//       {
//         visibility && (
//           <div>
//             <p>Some Text</p>
//           </div>
//         )
//       }
//     </div>
//   );

//   const appRoot = document.querySelector('#app');
  
//   ReactDOM.render(visiblityToggle, appRoot);
// };

// render();

class VisiblityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    }
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide details' : 'Show details'}
        </button>
        {
          this.state.visibility && (
            <div>
              <p>Some Text</p>
            </div>
          )
        }
      </div>
    );
  }
}

ReactDOM.render(<VisiblityToggle />, document.querySelector("#app"));