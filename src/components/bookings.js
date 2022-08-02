
import {
    collection,
    getDocs,
 onSnapshot, orderBy, query
} from "firebase/firestore";

import { useEffect, useState } from "react";
import { db } from "./firebase";
import '../css/hotels.css'
const Bookings = () => {


    const [details, setDetails] = useState([]);
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const [hotelId, setHotelId] = useState("");
    const [hotelName, setHotelName] = useState("");
    const [map, setMap] = useState("");


    useEffect(() => {
        const hotelCollectionRef = collection(db, "bookings");

        const getDetails = async () => {
            const data = await getDocs(hotelCollectionRef);
            setDetails(
                data.docs.map((doc) => ({

                    hotelId: doc.data().hotelId,
                    numAdults: doc.data().numAdults,
                    numChildren: doc.data().numChildren,
                    numRooms: doc.data().numRooms,
                    sumDays: doc.data().sumDays,
                    image: doc.data().image,
                    sum: doc.data().sum,
                    hotelName:doc.data().hotelName,
                    location:doc.data().location,
                    email: doc.data().email,
                    name: doc.data().name,
                    surname: doc.data().surname,
                    userId: doc.data().userId,



                }))
            );
        };
        getDetails();
    }, []);


    useEffect(() => {
        const usersRef= collection(db, "users");
        const q = query(usersRef, orderBy("createdAt", "desc"));
        onSnapshot(q, (snapshot) => {
          const userDoc = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setUsers(userDoc);
          console.log(users);
        });
      }, []);
  
    return (
        <div className="container">
            <h2 className="hotelCont">Bookings</h2>

            {details.map((hotel, id) => (
                <div className="cardDetails" key={id}>
                   

                    <div className="cardImage">
                        <img
                            className="hotel-pic"
                            src={hotel.image}
                            alt={hotel.name}
                        />
                    </div>
                    <div className="detailsH">
                        <p className="hotel-name">Hotel</p>
                        <p>{hotel.hotelName}</p>
                        <p>Adults: {hotel.numAdults}</p>
                        <p>Children: {hotel.numChildren}</p>
                        <p>Rooms: {hotel.numRooms}</p>
                        <p>R {hotel.sum}.00</p>
                        {/* <textarea> {hotel.description}</textarea> */}
                    </div>
                    <div className="detailsH">
{/* user details */}
                        <p className="hotel-name">User</p>
                        <p>{hotel.name}</p>
                        <p>Surname: {hotel.surname}</p>
                        <p>Email: {hotel.email}</p>
                      
                   

                    </div>
                </div>
            ))}
        </div>
    );
};

export default Bookings;
