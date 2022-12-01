import logo from './logo.svg';
import './App.css';
import axios from "axios"
import CreateUser from './Router/components/create';
import { GlobalContext } from './context/GlobalContext';

function App() {
  const getAllUsers = axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",{
    Authorization: "igor-souza-ammal"
  })
  .then((res)=>{
    console.log(res)
  })
  .catch((error)=>{
    console.log(error)
  })
  return (
    <GlobalContext.Provider>
      <Card/>
    </GlobalContext.Provider>
  )
}

export default App;
