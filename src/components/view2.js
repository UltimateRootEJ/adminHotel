import EditHotels from "./edithotels";
import '../css/home.css'
import LeftNav from "./leftNav"

export default function ViewTwo()
{


    return(
        <div className="mainHome">

        <div className="left">
        <LeftNav/>


        </div>
        <div className="right">
          <EditHotels/>

        </div>
    </div>
    )
}