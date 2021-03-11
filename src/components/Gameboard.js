import './styles/gameboard.css';

export default function Gameboard(props){
    const arrayElemets = props.gameArray;
    const ticItems = arrayElemets.map( x => <div class="box"> x </div> );
    
    return(
        <div class="game-board">
            {ticItems}
        </div>
    );
}