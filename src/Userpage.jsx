import React, { useState,useEffect } from 'react'

const userdet= "https://jsonplaceholder.typicode.com/posts";

const Userpage = () => {
    const [user,setuser]=useState([])

    const userhandle=async()=>{
         const responce = await fetch(userdet)
         const newdata = await responce.json()

         setuser(newdata)

    console.log(newdata)
    };
    useEffect(() => {
    userhandle();
  }, []);
  
  return (
    <div>
      <h1>User Posts</h1>
      {user.length > 0 ? (
        <ul>
          {user.map(item => ( <li key={item.id}> 
            <strong>{item.title}</strong>
              <p>{item.body}</p>
            </li>
          ))} </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Userpage