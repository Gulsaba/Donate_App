import './CardForDoner.css';
function CardForDoner(props){
    return(
        <div className="__card">{props.children}</div>
    )
}
export default CardForDoner;