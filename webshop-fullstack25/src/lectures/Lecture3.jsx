import { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.initialCount || 0,
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>{this.props.title || "Default Title"}</h1>
        <p>Antal klick: {this.state.count}</p>
        <SimpleButton onClick={this.incrementCount} text="Öka" />
        <button onClick={this.incrementCount}>Öka</button>
      </div>
    );
  }
}

export class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerId: null,
      timeCounter: 0,
    };
  }

  componentDidMount() {
    console.log("Timer component has mounted");
    const timerId = setInterval(() => {
      this.setState((prevState) => ({
        timeCounter: prevState.timeCounter + 1,
      }));
      // this.setState({ timeCounter: this.state.timeCounter + 1 });
    }, 1000);
    this.setState({ timerId });
  }

  componentWillUnmount() {
    console.log("Timer component will unmount", this.state.timerId);
    clearInterval(this.state.timerId);
  }

  render() {
    return (
      <div>
        <h1>Timer</h1>
        <p>Timer ligger just nu på: {this.state.timeCounter} sekunder</p>
        <SimpleButton
          onClick={() => this.setState({ timeCounter: 0 })}
          text="Nollställ timer"
        />
        <SimpleButton
          onClick={() => clearInterval(this.state.timerId)}
          text="Stoppa timer"
        />
      </div>
    );
  }
}

export class UserProfile extends Component {
  render() {
    return (
      <>
        <h3>
          {this.props.firstName} {this.props.lastName}
        </h3>
        <p>{this.props.email}</p>
        <p>{this.props.bio}</p>
      </>
    );
  }
}

export class SimpleButton extends Component {
  render() {
    return <button onClick={this.props.onClick}>{this.props.text}</button>;
  }
}
