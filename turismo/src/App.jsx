import { useEffect, useState } from 'react'
import Tours from './components/Tours'
import Loading from './components/Loading'

import './App.css'

import { url } from '../api/api'

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const romeveTour = (id)=>{
    const newTours = tours.filter((tour)=> tour.id !== id)
    setTours(newTours)
  }

  const fetchToursApi = async () => {
    setLoading(true)

    try{
      const response = await fetch(url)
      const data = await response.json()
      setLoading(false)
      setTours(data)
      console.log("Dados da api", data)

    }catch(error){
      setLoading(false)
      console.log(error)
    }
  }


  useEffect(()=>  {
    fetchToursApi()
  },[])


  if(loading){
    return(
      <main>
        <Loading/>
      </main>
    )
  }

  if(tours.length === 0){
    return(
      <main>
        <div className='title'>
          <h2>No tours left</h2>
          <button className='btn'onClick={()=> fetchToursApi()}>Refresh</button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} romeveTour={romeveTour}/>
    </main>
    )
}

export default App
