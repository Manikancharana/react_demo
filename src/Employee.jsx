import React,{useState} from 'react'

const Employee = () => {
       const[name,setName]=useState("");
       const[role,setRole]=useState("");
       const[email,setEmail]=useState("");
       const[dept,setDept]=useState("");

  
       const empdetails={name,role,email,dept}
       
       const emphandle=(e)=>{
        e.preventDefault();
        console.log(empdetails)
       }
  return (
    <div style={{border:"none"}}>
      <form className="section" onSubmit={emphandle}>
            <label> Employee name :</label>
            <input type='text' name='name' onChange={(e)=>setName(e.target.value)}/><br/>
             <label> Employee Role :</label>
            <input type='text' name='role' onChange={(e)=>setRole(e.target.value)}/><br/>
            <label> Employee e-mail :</label>
            <input type='text'name='email'onChange={(e)=>setEmail(e.target.value)}/><br/>
             <label> Employee Dept :</label>
            <input type='text' name='dept' onChange={(e)=>setDept(e.target.value)}/><br/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Employee