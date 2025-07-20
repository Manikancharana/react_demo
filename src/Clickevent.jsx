import React from "react";
import { useState } from "react";

const Clickevent=()=>{
    const[number,setNumber]=useState(0);
    return(
        <div>
            The Increment and decrement value on between  -5to 5 only 
            <h1>{number}</h1>
            <button onClick={()=>{
                if(number<5)setNumber(number+1)}}>Increment</button>
            <button onClick={()=>{ if(number>-5) setNumber(number-1)}}>Decrement</button>
            <button onClick={()=>{setNumber(0)}}>Reset</button>
        </div>
    )
}
export default Clickevent;