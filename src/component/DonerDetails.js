import './DonerDetails.css'
function DonerDetails(props){
 //const [currentState, newStae] = useState(props.Doner);

    return (
     
     <div className='__donerDetails'> 
     
       <div className='__amount'>
       ${props.Amount}
         </div>  
       <div className="__doner">
         {props.Doner}
         </div>
         <div className='__contact'>
         {props.Contact}
         </div>
     </div>
     
    )}
    // exporting in Doner.js file
export default DonerDetails;