import "./Quote.css";

const Quote = (props) => {
  return (
    <>
      <div className="text" id="text" style={{ color: props.color }}>
        {props.quote.quote}
      </div>
      <div className="author" id="author" style={{ color: props.color }}>
        - {props.quote.author}
      </div>
    </>
  );
};

export default Quote;
