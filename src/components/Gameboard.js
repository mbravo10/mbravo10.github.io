import './styles/gameboard.css';

export default function Gameboard(props){
    return(
        <div class="game-board">
            <div class="box">{props.gameArray[0]}</div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
        </div>
    );
}