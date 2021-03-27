import { Badge, OverlayTrigger, Tooltip } from "react-bootstrap";

export default function Gamestatus(props) {
  return (
    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Play!</Tooltip>}>
      <span className="d-inline-block">
        <h1>
          <Badge variant="info">
            {`Current player: ${props.currentP ? "❌" : "⭕️"}`}
          </Badge>
        </h1>
      </span>
    </OverlayTrigger>
  );
}
