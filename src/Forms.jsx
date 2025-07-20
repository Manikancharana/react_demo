import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

const Forms = () => {
    const [userinput,setUserinput]=useState();
    const [userdetails,setUserdetails]=useState();
     const notify = () => toast("Uploaded successfully....");

     const getuserinput =(e) =>{
       setUserinput(e.target.value)
       
     }
    const details =(a) =>{
      a.preventDefault() // prevent to reload overall page using forms 
        setUserdetails(userinput)
        notify();
    }


  return (
    <section className="sec">
      <ToastContainer />
   <div className="inputdev">
    <h2>Hello, {userdetails}</h2>
    <form onSubmit={details}>
    <input type="text" placeholder="Enter text " onChange={getuserinput}></input> <br></br>
    <button id="but" type="submit">Submit </button>
    </form>
   </div>
    </section>
  )
}

export default Forms