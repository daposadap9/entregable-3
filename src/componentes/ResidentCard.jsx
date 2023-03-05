import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./styles/ResidentCard.css"

const ResidentCard =({urlResident}) =>{
    const [residentInfo, setResidentInfo] = useState()

    useEffect(()=>{
    axios.get(urlResident)
    .then((res)=>setResidentInfo(res.data))
    .catch((err)=>console.log(err))

},[])

    return (
        <article className='residentCard'>
            <div className='residentCard__Img'>
                <img src={residentInfo?.image} alt="" />
            </div>
            <div className='residentCard__status'>
                <div className={`residentCard__status-circle ${residentInfo?.status}`}></div>
                <h4 className='residentCard__status-name'>{residentInfo?.status}</h4>
            </div>
            <section className='residentCard__info'>
                <h3 className='residentCard__name'>{residentInfo?.name}</h3>
                <hr className='residentCard__line'/>
                <ul>
                    <li className='residentCard__item'>Specie:<span></span>{residentInfo?.species}</li>
                    <li className='residentCard__item'>Origin:<span></span>{residentInfo?.origin.name}</li>
                    <li className='residentCard__item'>Episodes where apears:<span></span>{residentInfo?.episode.length}</li>
                </ul>
            </section>
        </article>
    )
}

export default ResidentCard
