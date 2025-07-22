import React from 'react'

const Arr=["Mani","Sai","Rajesh","masood"]
const Arr1=[98,86,79,69]
const mer=[...Arr,...Arr1]
console.log(mer)

const obj={a:"maths",b:"physics",c:"science"}
const obj1={x:"Java",y:"Python",z:"Javascript"}

const obj2={...obj,...obj1}
 console.log(obj2)
function Spread() {
  return (
    <div><h2>Combine 2 arrays using spread operator</h2>  <br/>
    <h5>array display in console</h5>
    </div>
  )
}

export default Spread