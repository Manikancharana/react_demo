import React, { useState,useEffect } from 'react'

const userdet= "https://jsonplaceholder.typicode.com/posts"
console.log(userdet)
const Userpage = () => {
    const [user,setuser]=useState([])

    const userhandle=async()=>{
         const responce = await fetch(userdet)
         const newdata = await responce.json()

         setuser(newdata)

    console.log(userhandle())
    };
    useEffect(() => {
    userhandle();
  }, []);
  return (
    <div>Userpage</div>
  )
}

export default Userpage