import './App.css';
import { useState,useEffect } from 'react';



export const App=()=> {

const[users, setUsers]=useState([])

const fetchUsers= async()=>{
try {

  const response= await fetch("https://jsonplaceholder.typicode.com/users")
  const data= await response.json()
  setUsers(data)
  console.log(data  )
} catch (error) {
  console.error(error)
}

}

//puedo hacerlo con el click
const handleFetch=()=> {
  fetchUsers()
}
//useffect
//useEffect(()=>{fetchUsers()},[])


  return (
    <div className="App">
      <header className="App-header">

       <p>react</p>
    <ul>
    {users.map(user => <> <li key={user.id}> Nombre: {user.name}</li>  <li>Email: {user.email}</li> <br /></> )}
    </ul>

    <button onClick={handleFetch}>Click para generar la api</button>
      </header>
    </div>
  )
}

