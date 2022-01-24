import React,{useContext} from "react";
import { globalData } from "./global";

function ThirdStep(){

    const {setCurrentStep,formData} = useContext(globalData)

    return(
        <React.Fragment>
            <br></br><br></br>
            <br></br><br></br>
            <br></br><br></br>
            <br></br><br></br>
            <br></br><br></br>

            <button onClick={()=>setCurrentStep(2)}>Previous</button>
            <button onClick={formData}>Submit</button>
        </React.Fragment>
    )
}
export default ThirdStep;