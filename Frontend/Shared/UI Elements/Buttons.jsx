import "./Buttons.css";

export default function Button(props) {
  return (
    <>
      <button
        type="submit"
        className={props.className}
        onClick={props.onClick}
        disabled={props.disabled}>
        <span className="button-text">{props.text}</span>
      </button>
    </>
  );
}
