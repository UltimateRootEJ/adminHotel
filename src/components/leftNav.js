import { useState } from 'react'
import { faLocation, faLocationDot, faDashboard, faBookBookmark,faEdit, faHotel,faSignOut,faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../css/leftNav.css'
import { useNavigate } from "react-router-dom";



export default function LeftNav() {
    const navigate = useNavigate();
    const [option, setOption] = useState([])
    console.log(option)

    
    const handleHome = (() => {
        navigate('/home')
    })
    const handleAdd= (() => {
   navigate('/view1')
    })

 
const handleEdit= (() => {
    navigate('/view2')
     })
     const handleBookings=(()=>{
        navigate('/view3')
    })
    const handleLogout = (() => {
        navigate('/login')
    })

   

    return (
        <div className='leftNav'>
        <div className='hotelsDiv'></div>
    
        <label  onClick={handleHome}> <FontAwesomeIcon icon={faHotel}/> Hotels</label><br></br>
        <label onClick={handleAdd} > <FontAwesomeIcon icon={faAdd} /> Add</label><br></br>
        <label  onClick={handleEdit}> <FontAwesomeIcon icon={faEdit}/> Edit</label><br></br>
        <label  onClick={handleBookings}> <FontAwesomeIcon icon={ faBookBookmark}/> Bookings</label><br></br>
        <label className='signOut' onClick={handleLogout} ><FontAwesomeIcon icon={faSignOut} /> Logout</label>
    </div>
    )

}