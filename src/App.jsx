import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { getRandomNumber } from './utils/handleRandom'
import LocationInfo from './componentes/LocationInfo'
import Pagination from './componentes/Pagination'
import { ResidentList } from './componentes/ResidentList'
import ResidentForm from './componentes/ResidentForm'

const RESIDENTS_PERPAGE = 12

function App() {

  //Estado que almacena la informacion de la location
  const [location, setLocation] = useState()
  //Estado que alamcena el valor del input no controlado
  const [nameLocation, setNameLocation] = useState("")
  //Estado que va a adminsitrar el tema de la paginación
  const[page,setPage] = useState(1)

//funcion que se encarga de obtener los residentes dependiendo de la pagina actual
  const pagination = () => {
    if(!location) return []
    const maxLimit = page * RESIDENTS_PERPAGE;
    const minLimit = maxLimit - RESIDENTS_PERPAGE;
    const newResidents = location?.residents.slice(minLimit, maxLimit);
    return newResidents
}

 
  //Funcion que se ejecuta en el submit del formulario
  const handleSubmit =(e)=>{
    e.preventDefault()
    setNameLocation(e.target.idLocation.value)
  }

  

//Efecto que se ejecuta en el primer render y cuando cambia el name location
  useEffect(()=>{
    setPage(1)
    const dimension = nameLocation === "" ? getRandomNumber(126) : nameLocation
    const URL=`https://rickandmortyapi.com/api/location/${dimension}`
    axios.get(URL)
    .then((res)=>setLocation(res.data))
    .catch((err)=>console.log(err))
  },[nameLocation])


  return (
    <div className="App">
      <ResidentForm handleSubmit={handleSubmit}/>
      <LocationInfo location={location}/>
      <Pagination location={location} RESIDENTS_PERPAGE={RESIDENTS_PERPAGE} setPage={setPage}/>
      <ResidentList pagination={pagination} />
      <Pagination location={location} RESIDENTS_PERPAGE={RESIDENTS_PERPAGE} setPage={setPage}/>
    </div>
  )
}
export default App
