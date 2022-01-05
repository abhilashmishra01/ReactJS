import React from "react";

const memo1 = React.memo( function NewChild(props){
    console.log("child is rendering");
    return(
       <React.Fragment>
           <h1>{props.key1}</h1>
       </React.Fragment>
    )
})
export default memo1;