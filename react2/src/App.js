import './App.css';
import { useState} from 'react';
import { UserList } from './userlist';



export const App=()=> {

//endpoint
const[endPoint, setEndpoint]=useState("users")

//cambiar el valor de endpoint con click 
const handleFetch=()=> {
  setEndpoint("comments")
}
//useffect
//useEffect(()=>{fetchUsers()},[])


  return (
    <div className="App">
      <header className="App-header">
       <p>react</p>
<UserList endPoint={endPoint}/>
    <button onClick={handleFetch}>Click para generar la api</button>

      </header>
    </div>
  )
}

