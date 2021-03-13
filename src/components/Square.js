import './styles/gameboard.css';

export default function Square(props){
    return(
    <button class="box" onClick={props.onClick}>{props.val}</button>
    );
}