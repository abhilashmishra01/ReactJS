import React, { useEffect, useState } from "react";
import NewChild from "./NewChild";

function NewParent(){
    const [msg,setMsg] = useState("Hello");
    useEffect(()=>{
        setInterval(()=>{
            setMsg(msg)
        },1000);
    },[]);
    return(
        <React.Fragment>
            <NewChild key1={msg}>
            </NewChild>
        </React.Fragment>
    )
}
export default NewParent;