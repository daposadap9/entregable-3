import React from 'react'
import "./styles/LocationInfo.css"

function LocationInfo({location}) {
    return (
        <section className='locationInfo'>
        <h2 className='locationInfo_name'>{location?.name}</h2>
        <ul className='locationInfo__ul'>
            <li>Type:<span>{location?.type}</span></li>
            <li>Dimension:<span>{location?.dimension}</span></li>
            <li>Population:<span>{location?.residents.length}</span></li>
        </ul>
      </section>
    )
}

export default LocationInfo
