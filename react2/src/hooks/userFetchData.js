import { useEffect, useState } from "react"
import { fetchData } from "../helpers/fetchData"
export const useFetchData=(endPoint)=>{
const [users, setUsers]= useState([])
const [isLoading, setIsLoading]= useState(true)

useEffect(()=>
  {fetchData(endPoint)
    .then(res=>{setUsers(res.data)
                setIsLoading(res.setIsLoading)
    })
  }, 
[endPoint])


return {
  users, isLoading
}


}