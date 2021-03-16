import "./styles/gameboard.css";

export default function Square(props) {
  return (
    <button className="box" onClick={props.onClick}>
      {" "}
      {props.val}{" "}
    </button>
  );
}
