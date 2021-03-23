import { Container, Jumbotron, Button, Row, Col } from "react-bootstrap";
import React from "react";
import Square from "./Square";
import Gamestatus from "./Gamestatus";
import Gamewinner from "./Gamewinner";
import Resetbutton from "./Resetbutton";
import "./styles/gameboard.css";
import winner from "./Logic";

export default class Gameboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: Array(9).fill(null),
      isXsTurn: true,
      isDisabled: false,
    };

    this.baseState = this.state;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      return (
        <div className="game-board">
          {this.props.gameArray.map((x, index) => this.renderSquare(x, index))}
        </div>
      );
    }
  }

  handleReset() {
    this.setState(this.baseState);
  }

  handleClick(i) {
    const square = this.state.value.slice();
    this.state.isXsTurn ? (square[i] = "X") : (square[i] = "O");
    this.setState({ value: square, isXsTurn: !this.state.isXsTurn });
    if (winner(square)) this.setState({ isDisabled: true });
  }

  renderSquare(i, index) {
    return (
      <Square
        key={index}
        val={this.state.value[i]}
        isDisabled={this.state.isDisabled}
        onClick={() => {
          this.handleClick(i);
        }}
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
          <Row>
            <Col>
              <div className="game-board">
                {this.props.gameArray.map((x, index) =>
                  this.renderSquare(x, index)
                )}
              </div>
            </Col>
            <Col>
              <Gamestatus currentP={this.state.isXsTurn} />
              <Gamewinner values={this.state.value} />
              <Resetbutton onClick={() => this.handleReset()} />
            </Col>
          </Row>
        </Row>
      </Container>
    );
  }
}
