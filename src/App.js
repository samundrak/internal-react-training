import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      name: "samundra"
    };
  }

  incCounter() {
    this.setState(
      () => ({
        counter: this.state.counter + 1
      }),
      () => {
        console.log(this.state.counter);
        console.log("after update");
      }
    );
  }
  render() {
    return (
      <div>
        <button onClick={() => this.incCounter()}>increment </button>
        {this.state.counter}
      </div>
    );
  }
}
