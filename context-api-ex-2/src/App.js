import { useState } from 'react';
import './App.css';
import { globalData } from "./global/global";
import Login from "./Login";
import Profile from "./Profile";
function App() {
  const [userName,setUserName] = useState("");
  const [password,setPassword] = useState("");
  const [showProfile,setShowProfile] = useState(false);
  //const [email,setEmail] = useState("");
  return (
    <div className="App">
        <globalData.Provider value={{userName,setUserName,password,setPassword,showProfile,setShowProfile}}>
            {showProfile?<Profile></Profile>:<Login></Login>}
        </globalData.Provider>
    </div>
  );
}

export default App;
