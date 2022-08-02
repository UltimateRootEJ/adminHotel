import '../css/navBar.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function NavBar()
{
const navigate=useNavigate()

const handleHotels=(()=>{
    navigate('/home')
})
const handleManage=(()=>{
    navigate('/manage')
})

const handleLogout=(()=>{
    navigate('/')
})
    return(
        <>
      <div className="navDiv">
        <div className="one">
         
    
            <div className="update">
            <h1 onClick={handleManage}>MANAGE HOTELS</h1>
            </div>
            </div>

            <div className='two'>
            <div className="logOutNav">
           <h1 onClick={handleLogout}>LOGOUT</h1>
            </div>
            </div>


        </div>
        </>
    )
}