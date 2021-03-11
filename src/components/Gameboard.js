import './styles/gameboard.css';

export default function Gameboard(props){
    return(
        <div class="game-board">
            <div class="box">{props.gameArray[0]}</div>
            <div class="box">{props.gameArray[1]}</div>
            <div class="box">{props.gameArray[2]}</div>
            <div class="box">{props.gameArray[3]}</div>
            <div class="box">{props.gameArray[4]}</div>
            <div class="box">{props.gameArray[5]}</div>
            <div class="box">{props.gameArray[6]}</div>
            <div class="box">{props.gameArray[7]}</div>
            <div class="box">{props.gameArray[8]}</div>
        </div>
    );
}