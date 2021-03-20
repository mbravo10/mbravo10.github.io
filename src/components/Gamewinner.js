import Alert from "react-bootstrap/Alert";
import Winner from "./Logic";

export default function Gamewinner(props) {
  return (
    <Alert variant="info">
      {Winner(props.values)
        ? `Winner is ${Winner(props.values)}`
        : "No winner yet"}
    </Alert>
  );
}
