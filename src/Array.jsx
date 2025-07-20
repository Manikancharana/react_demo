import React from 'react'


let Arr=["Mani","sai",28,{"age":21}];

let person=[
    {
    name:"Mani",
    age:22,
     email:"mani123@gmail.com",
    ph_no:45896
}]
const Array = () => {
  return (
    <div>
       My name is {Arr[0]} <br></br>
       <h2>My roll no is {Arr[2]}</h2>
       <h2>My age is {Arr.map((item)=>{
      return(
        <div>{item.age}</div>
      )
       })} </h2>
    </div>
  )
}

export default Array