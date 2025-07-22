import React, { useState } from 'react'

function Circuit() {  //short circuit evalution 
   const[game,setGame]=useState(true)

   const Mygame =() =>{    
    return(
        <div>
            <h2>I like cricket </h2>
        </div>
    )
   }
  return (
    <div>
        {game && <Mygame/>  }
    </div>
  )
}

export default Circuit