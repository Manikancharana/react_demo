import React,{useEffect} from 'react'
import { userdata } from './Data'

const NestedObject = () => {
    useEffect(()=>{
      console.log(userdata)
    },[])
  return (
   <div > 
      {userdata.map((obj)=>{
        return(
            <div style={{ border: 'none', padding: '10px', marginBottom: '10px' }}  > 
            user name : {obj.username}<br/>
            email id  : {obj.email}<br/>
            Address : {obj.address.street}
            </div>
        )
      })}
   </div>
  )
}

export default NestedObject