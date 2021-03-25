import Alert from "react-bootstrap/Alert";
import Winner from "./Logic";

export default function Gamewinner(props) {
  return (
    <Alert variant={Winner(props.values) ? "success" : "info"}>
      {Winner(props.values)
        ? `Congratulations player ${Winner(props.values)}!`
        : "No winner yet"}
    </Alert>
  );
}
