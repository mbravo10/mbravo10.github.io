import "./styles/gameboard.css";
import { Container, Jumbotron, Button, Row, Col } from "react-bootstrap";
import React from "react";
import Square from "./Square";

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
        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <div class="game-board">
              {this.props.gameArray.map((x, index) =>
                this.renderSquare(x, index)
              )}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
