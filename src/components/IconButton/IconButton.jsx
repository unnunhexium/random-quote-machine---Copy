import "./IconButton.css";

const IconButton = (props) => {
  return (
    <a className="icon-button" href=" " style={{ background: props.color }}>
      <img src={props.src} alt="icon" className="icon-button__icon" />
    </a>
  );
};
export default IconButton;
