//console.log('works');

//JSX - JavaScript XML

const template = (
  <div>
    <h1>Hello React</h1>
    <p>This is some info</p>
    <ol>
      <li>hello</li>
    </ol>
  </div>
);

//user
const user = {
  name: "Greta",
  age: 21,
  location: "Vilnius"
};

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}
const userName = 'Greta Miau';
const userAge = 21;
const userLocation = 'Vilnius';
const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);
//

//challange Nr. 2
const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer!",
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

const removeAll = () => {
  app.options = [];
  render();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const render = () => {
  const templateThree = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options && app.options.length > 0 ? 'Here your options:' : 'No options!'}</p>
      <button disabled={app.options.length == 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={removeAll}>Remove All</button>
      <ol>
        {
          app.options.map((option) => {
            return <li key={option}>Item: {option}</li>
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );
  const appRoot = document.querySelector('#app');
  
  ReactDOM.render(templateThree, appRoot);
};

render();
//


//map challange nr. 3
const multiplier = {
  numbers: [1, 5, 6, 10],
  multiplyBy: 2,
  multiplay() {
    return this.numbers.map((number) => this.multiplyBy * number);
  }
};
