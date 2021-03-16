import "./styles/gameboard.css";
import { Container, Jumbotron, Button, Row, Col } from "react-bootstrap";
import React from "react";
import Square from "./Square";
import Gamestatus from "./Gamestatus";

export default class Gameboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: Array(9).fill(null),
      isXsTurn: true,
    };
  }

  handleClick(i) {
    const square = this.state.value.slice();
    this.state.isXsTurn ? (square[i] = "X") : (square[i] = "O");
    this.setState({ value: square, isXsTurn: !this.state.isXsTurn });
  }

  renderSquare(i, index) {
    return (
      <Square
        key={index}
        val={this.state.value[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    return (
      <Container fluid="true">
        <Jumbotron style={{ backgroundColor: "#0B0C10", color: "#45A29E" }}>
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>
            <Button style={{ background: "#45A29E" }}>Learn more</Button>
          </p>
        </Jumbotron>
        <Row className="justify-content-md-center">
          <Col sm={{ span: 5, offset: 2 }}>
            <div className="game-board">
              {this.props.gameArray.map((x, index) =>
                this.renderSquare(x, index)
              )}
            </div>
          </Col>
          <Col>
            <Gamestatus currentP={this.state.isXsTurn} />
          </Col>
        </Row>
      </Container>
    );
  }
}
