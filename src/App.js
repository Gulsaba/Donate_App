import React, {useState, useEffect} from 'react';  
import './App.css'
import Doners from './component/Doners'
import DonerId from './component/DonerId'

import FormRapComponent from './component/FormRapComponent'


const Initial_items = [
  {id:"ed3", Doner:'Harsh', Amount:12000, Contact:9379296935},
  {id:"ed2", Doner:'Maan', Amount:3000, Contact:9369296835},
  {id:"id3", Doner:'Gulsaba', Amount:5000, Contact:8966929690},
   ]


function App() {

  const [items, setItems] = useState(Initial_items)
  const [userId, setUserId] = useState()
  const [setUserIdBox, removeUserIdBox] = useState(false)

 
 function onSubmitHandler(donerSaveData)
 {
 
  //localStorage.setItem("isVisit", "1");
  
  setItems((pre_Items)=>{
    return ([ donerSaveData, ...pre_Items]);
  });

  UserIdHandler();

} 

  
const UserIdHandler=(props)=>{
  const id = Math.random()*10000
  setUserId(id)
  removeUserIdBox(true)
 
}
const UserIdBoxHandle=(props)=>{
  removeUserIdBox(false)
  
}
  
 // event listener
  return (
  
 <div className='App'>
   <div className='Header'>
            <h2>
              Please donate some doller for poor childs
            </h2>
        </div>
    {setUserIdBox && <DonerId onRemove = {UserIdBoxHandle} id= {userId}/>}
   <FormRapComponent onSaveDataFromFormRapcomonent={onSubmitHandler}></FormRapComponent>
  <Doners data = {items}/>
 </div>
   
  );
}

export default App;
