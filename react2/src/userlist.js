import { useEffect, useState } from "react";
import { useFetchData } from "./hooks/userFetchData";

export const UserList=({endPoint})=>{
//estado
const{users, isLoading}=useFetchData(endPoint)

    return(
        <>
        <ul>
    {users.map(user => <> <li key={user.id}> Nombre: {user.name}</li>  <li>Email: {user.email}</li> <br /></> )}
    </ul>
        </>
    )
}