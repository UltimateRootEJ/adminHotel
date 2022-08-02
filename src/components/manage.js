import '../css/manage.css'
import AddHotel from './addhotel'
import NavBar from './navBar'
import EditHotels from './edithotels'



export default function Manage()
{

    return(
        <>
            
           

            <div className="mainDiv">
      <div className="editHotels">
        <EditHotels />
      </div>
      <div className="addHotels">
 
      <AddHotel />
      </div>
      </div>
        </>
    )
}