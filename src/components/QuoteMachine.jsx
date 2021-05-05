import React, { Component } from "react";
import quotes from "./DataBase";
import IconButton from "./IconButton/IconButton.jsx";
import NewQuoteButton from "./NewQuoteButton/NewQuoteButton.jsx";
import Quote from "./Quote/Quote.jsx";
import "./Quote/Quote.css";
import "./IconButton/IconButton.css";
import "./NewQuoteButton/NewQuoteButton";
import "./QuoteMachine.css";

class QuoteMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#" + Math.random().toString(16).slice(2, 8),
      quote: quotes[Math.floor(Math.random() * quotes.length)],
    };
  }

  getQuote = () => {
    this.setState({
      quote: quotes[Math.floor(Math.random() * quotes.length)],
      color: "#" + Math.random().toString(16).slice(2, 8),
    });
  };

  render() {
    return (
      <div id="body" style={{ background: this.state.color }}>
        <div id="quote-box">
          <Quote color={this.state.color} quote={this.state.quote} />
          <div id="button-box">
            <IconButton src="assets/tumblr.svg" color={this.state.color} />
            <IconButton src="assets/twitter.svg" color={this.state.color} />
            <NewQuoteButton
              color={this.state.color}
              clickHandler={this.getQuote}
              text="New quote"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteMachine;
