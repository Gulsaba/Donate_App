import React, { useState } from 'react';
import './Form.css'

function Form(props){
    const [enteredName, setEnteredname] = useState('');
    const [enteredAmount, setNumber] = useState('');
    const [enteredContact, setContact] = useState('');
   
   const [isValid, setValid]= useState(true);
    
   const updateCaseOfinetered=()=>{
    const y=enteredName.toUpperCase()
    const z=y.slice(0,1);
    const t=y.slice(1, enteredName.lenght);
    const s=z+ t.toLowerCase();
    setEnteredname(s);
   }
    const NameHandler=(event)=>{
       setEnteredname(event.target.value);
    }
    const amounthandler=(event)=>{
        setNumber(event.target.value);
    }
    const ContactHandler=(event)=>{
        setContact(event.target.value);
    }
    const submithandler=(event)=>{
        event.preventDefault();
//Stroing data from all input fields in a variable userDetails//////////////////////////////////////////////
        const userDetails={
            Doner : enteredName,
            Amount:enteredAmount,
            Contact:enteredContact
            
        }
        // vaildation input type name
        if(enteredContact.trim().length!==10){
        setValid(false)
        alert("Please enter valid contact number")
          return;
        }
       props.onSaveData(userDetails)// Pass data in parent class FormRapComponent.js
     //  setUserId(true)
    
    // After printing all details of user now we have to set input fields from data using value attribute
    
        setEnteredname('');
        setNumber('');
        setContact('');
        

    }
    return(
        <>
        
        <form onSubmit={submithandler}>
      
            <div className='inputFields'>
            <div className='inputField'>
                <label htmlFor=""  className='lableClass'>Name  :</label>

                <input 
                type="text"
                 required
                  maxLength={15} 
                   value ={enteredName}
                    onChange={NameHandler} 
                    onMouseLeave={updateCaseOfinetered}
                    />
            </div>
            <div className='inputField' >
                <label htmlFor="" className='lableClass'>Amount:</label>
                <input
                 type="number" 
                 required 
                 value ={enteredAmount}
                  onChange={amounthandler}
                   />
            </div>
            <div className='inputField'>
                <label htmlFor="" className='lableClass'>Contact:</label>
                <input 
                
                type="number"
                 required
                  value ={enteredContact} 
                  onChange={ContactHandler}
                  
                   />
            </div> 
            <div >
            <button className='new-expense'>Donate</button>
            </div>
            </div>   
            
        </form>
        </>
    )
}
export default Form;