import Form from './Form'
import './FormRapComponent.css'
function FormRapComponent(props){
    //Assigning the userDetails from Form.js into newSubmitData
    const submitHandler=(newSubmitData)=>{
     const submitData = {
         ...newSubmitData,
        
     };
     //console.log(submitData);

     props.onSaveDataFromFormRapcomonent(submitData); // Pass data to App.js file throughonSaveDataFromFormRapcomonent
    };
    return(
        <div className='formContainer'>
           <Form onSaveData={submitHandler}/>
        </div>
    );
}
export default FormRapComponent;