import React, {useEffect,useState} from "react";

function App() {

    const [arr,setArr] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json()).then((posRes)=>{
          setArr(posRes);
        },(errRes)=>{
          console.log(errRes);
        })
    },[]);


  return (
    <React.Fragment>
        <p>{JSON.stringify(arr)}</p>
    </React.Fragment>
  );
}

export default App;
