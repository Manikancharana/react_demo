import React , {useState,useEffect} from "react";

const Resize =()=>{
    const[screensize,setScreensize] =useState({
        width:window.innerWidth,
        height:Window.innerHeight,
    });

const Updatesize =() =>{
    setScreensize({
         width:window.innerWidth,
         height:window.innerHeight,
});
};
useEffect(()=>{
    window.addEventListener('resize',Updatesize);
    return()=>{
        window.removeEventListener('resize',Updatesize);
};
},[]);

return(
    <div>
        <h1>Screensize</h1>
        <p style={{color:"violet"}}>width : {screensize.width}px</p>
        <p style={{color:"red"}}>height : {screensize.height}px</p>
    </div>
);
};

export default Resize;