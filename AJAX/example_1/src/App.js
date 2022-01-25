import React,{useEffect,useState} from 'react';
import axios from 'axios';

function App() {

    const [arr,setArr] = useState([]);

  useEffect(()=>{
    axios.get("https://www.w3schools.com/angular/customers.php").then((posRes)=>{
      const {data} = posRes;
      const {records} = data;
      setArr(records);
    },(errRes)=>{
      console.log(errRes);
    })
  },[])



  return (
    <React.Fragment>
      <table border='1'
             cellPadding='10'
             cellSpacing='10'
             align='center'>

          <tr align='center'>
            <th>SL.NO</th>
            <th>NAME</th>
            <th>COUNTRY</th>
            <th>CITY</th>
          </tr>

          {arr.map((element,index)=>(
            <tr align='center'>
              <td>{index+1}</td>
              <td>{element.Name}</td>
              <td>{element.Country}</td>
              <td>{element.City}</td>
            </tr>
          ))}

      </table>
    </React.Fragment>
  );
}

export default App;
