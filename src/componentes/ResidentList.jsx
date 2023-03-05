import React from 'react'
import ResidentCard from './ResidentCard'
import "./styles/ResidentList.css"

export const ResidentList = ({pagination}) => {
  return (
    <section className='residentList'>
      {
        pagination()?.map(urlResident => <ResidentCard key={urlResident} urlResident={urlResident}/>)
      }
    </section>
  )
}
