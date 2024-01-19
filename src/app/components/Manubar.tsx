import React from 'react'
import HeaderPage from './HeaderPage'
import Navbar from './Navbar'

export default function Manubar() {
  return (
    <div> 
        <HeaderPage></HeaderPage>
        
        <Navbar showContent={false} />


     </div>


  )
}
