import LeftNav from "./leftNav"
import Bookings from "./bookings"
import '../css/home.css'

export default function ViewThree()
{
    return(
        <div className="mainHome">

        <div className="left">
        <LeftNav/>


        </div>
        <div className="right">
         <Bookings/>

        </div>
    </div>
    )
}