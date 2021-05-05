import "./NewQuoteButton.css";

const NewQuoteButton = (props) => {
  return (
    <button
      className="newquote-button"
      id="new-quote"
      style={{ background: props.color }}
      onClick={props.clickHandler}
    >
      {props.text}
    </button>
  );
};

export default NewQuoteButton;
