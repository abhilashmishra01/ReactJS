import React,{useState} from "react";

function Example1(){

        const [msg1, setMsg1] = useState("Now no button is clicked so the value is:");
        const [bool1, setBool1] = useState(false);

        const myFun = ()=>{
            setMsg1("Now the button is clicked so the value is:")
            setBool1(true)
        }

    return(
        <React.Fragment>
            <h1>{msg1}</h1>
            <h1>{JSON.stringify(bool1)}</h1>

            <br></br>

            <button onClick={myFun}>Click Me</button>
        </React.Fragment>
    )

};

export default Example1;