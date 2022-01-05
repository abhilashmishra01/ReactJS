import React, { useEffect, useState } from "react";
import Child from "./Child";

function Parent(){
    const [num,setNum] = useState(100);

        useEffect(()=>{
            setInterval(()=>{
                setNum(num)
            },1000);
        },[]);
    return(
        <React.Fragment>
            <Child key1={num}></Child>
        </React.Fragment>
    )
}

export default Parent;