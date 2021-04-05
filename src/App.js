import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const[loading,setLoading]=useState(true)
  const[isError,setIsError]=useState(false)
  const[data,setData]=useState([])

  const removeTour=(id)=>{
    setData(data.filter(item=>item.id!==id))
  }
  const fetchData=(url)=>{
    fetch(url)
    .then(res=>{
     if(res.ok){
        return res.json()
      }
        setLoading(false)
        setIsError(true)
      throw new Error(res.statusText)
      }
    )
    .then(res=>{
      setData(res)
      setLoading(false)
      setIsError(false)
    })
    .catch(err=>{
     
      setIsError('there is an error')
    })
  }
  useEffect(()=>{
    fetchData(url)
    setLoading(true)
    setIsError(false)
    setData([])
  },[url])
  if(data.length===0){
    return <div className="title">
        <h1>0 tours left</h1>
        <button className='btn' onClick={()=>{fetchData(url)}}>Refresh</button>
    </div>
  }else{
    return <>
    {loading&& <h1>Loading....</h1> }
    {isError&& <h1>{isError}</h1> }
    {data && <Tours removeTour={removeTour} tours={data}/> }
  </>
  }

}

export default App
