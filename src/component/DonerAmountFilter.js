import React, {forwardRef} from "react";
import './DonerAmountFilter.css'
const  DonerAmountFilter = forwardRef((props, ref)=>{
   /*const [selectedOption, setSelectedOption]=useState('')
    const optionHandler=(event)=>{
        
       // console.log(event.target.value);
       setSelectedOption(event.target.value);
       
    }
    
    props.onSelectMinMaxAmount(selectedOption);
    */
    return(
        <>
       
        <select className="donerAmountSelect" ref = {ref} onChange={props.onSelectMinMaxAmount} >
        <option defaultValue={0} selected disabled hidden>Select an Option</option>
          <option value="MaxAmount">Maximum Amount</option>
          <option value="MinAmount">Minimum Amount</option>
        </select>

        </>
    )
})
export default DonerAmountFilter;