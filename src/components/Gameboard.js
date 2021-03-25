import {
  Container,
  Jumbotron,
  Button,
  Row,
  Col,
  Card,
  Toast,
} from "react-bootstrap";
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
      xWins: 0,
      oWins: 0,
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
    } else if (
      prevState.xWins !== this.state.xWins ||
      prevState.oWins !== this.state.oWins
    ) {
      return (
        <Toast>
          <Toast.Body>{`Wins for Player X: ${this.state.xWins}`}</Toast.Body>
        </Toast>
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
    if (Winner(square)) {
      this.setState({ isDisabled: true });
      this.state.isXsTurn
        ? this.setState({ xWins: this.state.xWins + 1 })
        : this.setState({ oWins: this.state.oWins + 1 });
    }
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
            <h1>Tic-Tac-Toe!</h1>
            <Row>
              <Col>
                <Toast>
                  <Toast.Body>{`Wins for Player X: ${this.state.xWins}`}</Toast.Body>
                </Toast>
              </Col>
              <Col>
                <Toast>
                  <Toast.Body>{`Wins for Player O: ${this.state.oWins}`}</Toast.Body>
                </Toast>
              </Col>
            </Row>
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
                <Card
                  style={{
                    backgroundColor: "#1f2933",
                    boxShadow: "5px 20px 30px #1f2833",
                  }}
                >
                  <Card.Body>
                    <Gamestatus currentP={this.state.isXsTurn} />
                    <Gamewinner values={this.state.value} />
                    <Resetbutton onClick={() => this.handleReset()} />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Row>
        </Container>
      </body>
    );
  }
}
