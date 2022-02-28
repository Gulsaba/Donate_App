import React, {useState, useRef} from 'react';
import DonerAmountFilter from './DonerAmountFilter'
import DonerDetails from './DonerDetails';
import CardForDoner from './CardForDoner'
import TotalAmount from './TotalAmount'

function Doners(props){
////////////////////////TotalAmount handling code///////////////////////////////////////////////////
  const [totalAmount, setAmount] = useState()
  const [setAmountBox, removeAmountBox ] = useState(false)
  const val = useRef("");
  
  const AmountBoxHandle=()=>{
    removeAmountBox(false)
    return;
  }
  const TotalAmountHandler=()=>{
  const totalAmount = props.data.map(item => item.Amount).reduce((prev, curr) => prev + curr);
   setAmount(totalAmount)
   removeAmountBox(true)

 }
/////////////////////////////////Maximum and Minimum amount handling code/////////////////////////
 const AmountHandler=()=>{
  const minMaxAmount = val.current.value;
  const sortArray = props.data.map(item => item.Amount)
  var result=sortArray.sort(function compare(a,b)  
 {  
   return a-b;  
 });  
if(minMaxAmount ==="MaxAmount"){
 alert("Maximum amount :: "+result[result.length-1])
}
else if(minMaxAmount === "MinAmount"){
alert("Minimum amount :: $ "+result[0])

 }
 }
//////////////////////////////////////Rendering data by Done.js component//////////////////////////

    return(
 <div>
     
 <CardForDoner>
   <div>
<div>Total mamount</div>
 <button
 style={{ padding:"1%",
  borderRadius: "12px",
  color:"white",
  background:"#40005d"

        }}
  onClick={TotalAmountHandler}
  >Check out total amount
  </button>
  </div>
{setAmountBox && <TotalAmount amount = {totalAmount} onRemove={AmountBoxHandle} />}

 <DonerAmountFilter onSelectMinMaxAmount = {AmountHandler}  ref = {val}/>

          {props.data.map((donerSaveData) => (
      
       // Data is being passing from App.js to donerDetails.js file via Doner.js
       <DonerDetails
       key={donerSaveData.id}
        Doner={donerSaveData.Doner}
       Amount={donerSaveData.Amount}
       Contact={donerSaveData.Contact}
        />

          ))}
  </CardForDoner>
  </div>     
    )
}
export default Doners;