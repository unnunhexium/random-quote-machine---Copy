import "./App.css";
import React, { Component } from "react";
import QuoteMachine from "./components/QuoteMachine";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <QuoteMachine />
      </div>
    );
  }
}

export default App;
