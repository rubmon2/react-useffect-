export const fetchData = async(endPoint) => {
    try {
      const response= await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`)
      const data= await response.json()
  console.log(data)
return{
    data, setIsLoading:false
}
    } catch (error) {
      console.error(error)
    }
    }

