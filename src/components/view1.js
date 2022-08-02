import LeftNav from "./leftNav"
import AddHotel from "./addhotel"
import '../css/home.css'

export default function ViewOne() {

    return (
        <div className="mainHome">

        <div className="left">
        <LeftNav/>


        </div>
        <div className="right">
          <AddHotel/>

        </div>
    </div>
    )
}


