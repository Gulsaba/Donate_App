
import './TotalAmount.css'
function DonerId(props){
  

    return(
        
            <div className='backdrop'>
            <div className='modal'>
                <header className='header'><h3 className='header'>Doner Id</h3></header>
                <div className='content'>
                <p><h3>Please note down your id :: </h3>  {props.id}   </p>
                </div>
                <footer className='actions'><button className='ButtonStyle' onClick={props.onRemove}>Close</button></footer>
            </div>
            </div>
        
)}
export default DonerId