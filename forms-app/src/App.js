import './App.css';
import Registration from './component/Registration';
import logo_am from "./asset/images/logo_am.jpg";
import {contextData} from "./context/context";
import { useState } from 'react';

function App() {

      const [formData,setFormData] = useState({});
      console.log("FormData...",formData)

  return (
      <contextData.Provider value={{formData,setFormData}}>
          <div className="row">
            <div className='col-md-5'>
                <Registration></Registration>
            </div>
            {/* <div className='col-md-7'>
                <img src={logo_am} className='img-fluid w-100'></img>
            </div> */}
        </div>
      </contextData.Provider>
  );
}

export default App;
