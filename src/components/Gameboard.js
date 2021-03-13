import './styles/gameboard.css';
import { Container, Jumbotron, Button, Row }from 'react-bootstrap';


export default function Gameboard(props){
    const arrayElemets = props.gameArray;
    const ticItems = arrayElemets.map( x => <div class="box"> {x} </div> );
    
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
                    {ticItems}
                </div>
            </Row>
        </Container>
    );
}