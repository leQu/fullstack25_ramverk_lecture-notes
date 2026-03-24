export function DoSomething() {
  const x = 42;
  return (
    <div>
      <h1>Doing something...</h1>
    </div>
  );
}

import Name from "./Name.jsx";

class Greeting extends React.Component {
  render() {
    return (
      <h1>
        Hello <Name name="Alex" age={30} nationality="Swedish" />
      </h1>
    );
  }
}

/* ___________________________ */

import MainButton from "./MainButton.jsx";

export class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      age: props.age,
    };
  }

  updateName(newName) {
    this.setState({ name: newName });
  }

  render() {
    return (
      <p>
        {this.props.name}, you are {this.props.age} years old and{" "}
        {this.props.nationality}
        <MainButton
          name={this.props.name}
          callback={() => alert(`Button clicked by ${this.props.name}!`)}
        />
        <MainButton
          name="Johan"
          updateParentName={() => this.updateName("Johan")}
        />
        <MainButton name="PheoH" />
      </p>
    );
  }
}

export class MainButton extends React.Component {
  render() {
    this.props.updateParentName && this.props.updateParentName("New Name");
    return (
      <button onClick={() => alert(`Button clicked by ${this.props.name}!`)}>
        Click me!
      </button>
    );
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <>
        <button onClick={() => this.increment()}>Increment</button>
        <p>{this.state.count}</p>
      </>
    );
  }
}
