import React, { useEffect, useState } from "react";
import { fetchData } from "../helpers/fetchData";


export const useFetchData= (endPoint) => {
const [users, setUsers]=useState([])
const[isLoading, SetIsLoading]=useState(true)


useEffect(()=>{fetchData(endPoint)},[endPoint])

  return {
    users,
    isLoading
   }
}

