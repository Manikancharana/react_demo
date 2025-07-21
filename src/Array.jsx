import React from 'react'


let Arr=["Sai","Mani",28,{"age":21}];

let person=[
    {
    name:"Manikancharana",
    age:22,
     email:"mani123@gmail.com",
    ph_no:45896
}]
const Array = () => {
  return (
    <div>
       My name is {Arr[0]} <br></br>
       <h2>My roll no {Arr[2]}<br></br>
  <h2> my age : {Arr[3].age}</h2>
       </h2>
       <h2>{person.map((item)=>{
      return(
        <div>My name :{item.name} <br></br>
        my e-mail id : {item.email} <br></br>
          My age :{item.age}<br></br>
          my ph_non :{item.ph_no}
        </div>
      )
       })} </h2>
    </div>
  )
}

export default Array