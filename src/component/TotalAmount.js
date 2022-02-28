
import './TotalAmount.css'
function TotalAmount(props){
  

    return(
        
            <div className='backdrop'>
            <div className='modal'>
                <header className='header'><h3 className='header'>Total Amount</h3></header>
                <div className='content'>
                <p><h3>Toal donated amount :: {props.amount} </h3>  </p>
                </div>
                <footer className='actions'><button className='ButtonStyle' onClick={props.onRemove}>Okey</button></footer>
            </div>
            </div>
        
)}
export default TotalAmount