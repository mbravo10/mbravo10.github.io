import { Container, Jumbotron, Button, Row, Col } from "react-bootstrap";
import React from "react";
import Square from "./Square";
import Gamestatus from "./Gamestatus";
import Gamewinner from "./Gamewinner";
import Resetbutton from "./Resetbutton";
import Winner from "./Logic";
import "./styles/gameboard.css";

export default class Gameboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: Array(9).fill(null),
      isXsTurn: true,
      isDisabled: false,
      isLoading: false,
    };

    this.baseState = this.state;
  }

  componentDidUpdate(_, prevState) {
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

  simulateNetworkResponse() {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  }

  handleClick(i) {
    const square = this.state.value.slice();
    this.state.isXsTurn ? (square[i] = "X") : (square[i] = "O");
    this.setState({ value: square, isXsTurn: !this.state.isXsTurn });
    if (Winner(square)) this.setState({ isDisabled: true });
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
      <body>
        <Container>
          <Jumbotron
            style={{
              backgroundColor: "#1f2833",
              color: "#45A29E",
              boxShadow: "5px 20px 30px #1f2833",
            }}
          >
            <h1>Hello, world!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <p>
              <Button>Learn more</Button>
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
      </body>
    );
  }
}
