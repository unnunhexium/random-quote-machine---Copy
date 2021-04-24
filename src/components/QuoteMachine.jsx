import React, { Component } from "react";
import "./QuoteMachine.css";
import quotes from "./dataBase";

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
          <div id="text" style={{ color: this.state.color }}>
            {this.state.quote.quote}
          </div>
          <div id="author" style={{ color: this.state.color }}>
            - {this.state.quote.author}
          </div>
          <div id="button-box">
            <a
              className="button"
              id="tweet-quote"
              style={{ background: this.state.color }}
            >
              <img id="tweet" src={"assets/twitter.svg"} />
            </a>
            <a
              className="button"
              id="repost-quote"
              style={{ background: this.state.color }}
            >
              <img id="repost" src={"assets/tumblr.svg"} />
            </a>
            <button
              id="new-quote"
              style={{ background: this.state.color }}
              onClick={this.getQuote}
            >
              New quote
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteMachine;
