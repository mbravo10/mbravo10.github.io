import './styles/gameboard.css';
import { Container, Jumbotron, Button, Row }from 'react-bootstrap';
import React, { useState } from 'react';
import Square from './Square';


export default class Gameboard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          value: Array(9).fill(null),
        }
    }

    handleClick(i){
        const square = this.state.value.slice();
        square[i] = 'X';
        this.setState({value : square});
    }

    renderSquare(i){
        return(
        <Square val={this.state.value[i]} onClick={() => this.handleClick(i)}/> 
        )
    }

    render(){
        return(
        <Container>
            <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
            <Row className="justify-content-md-center">
                <div class="game-board">
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                </div>
            </Row>
        </Container>
    )};
}