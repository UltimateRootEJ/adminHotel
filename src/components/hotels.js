
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./firebase";
import '../css/hotels.css'
const Remove = () => {
  const [details, setDetails] = useState([]);
  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [hotelId,setHotelId]=useState("");
  const [hotelName,setHotelName]=useState("");
  const [map,setMap]=useState("");
 

  useEffect(() => {
    const hotelCollectionRef = collection(db, "hotels");

    const getDetails = async () => {
      const data = await getDocs(hotelCollectionRef);
      setDetails(
        data.docs.map((doc) => ({
          name: doc.data().name,
          location: doc.data().location,
          price: doc.data().price,
          image: doc.data().image,
          id: doc.id,
          description: doc.data().description
        }))
      );
    };
    getDetails();
  }, []);
  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  const deleteHotel = async (id) => {
    const hotelDoc = doc(db, "hotels", id);
    await deleteDoc(hotelDoc);
    alert("Deleted Successfully");
    // console.log(id)
  };
  const editHotel = async (id,name) => {
    document.querySelector(".edit").style.display = "block";
    
    setHotelId(id)
    setHotelName(name)
    console.log(id)  
    console.log(name)
  };
 
  const close = () => {
    document.querySelector(".edit").style.display = "none";
  };
  const updateHotel = async () => {
    const hotelDoc = doc(db, "hotels", (JSON.stringify({hotelId})).substring(12,32));
    const newHotelDetails = {
      name: name,
      location: location,
      map:map,
      price: price,
      image: file.name,
      description:description
    };
    await updateDoc(hotelDoc, newHotelDetails)
      .then(() => {
        alert("Updated Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
    //  console.log((JSON.stringify({hotelId})).substring(12,32))
  };
  return (
    <div className="container">
      <h2 className="hotelCont">Hotels</h2>

      {details.map((hotel, id) => (
        <div className="cardDetails" key={id}>
          <div className="edit">
            <h2 className="close" onClick={close}>
              x
            </h2>{" "}
            <br></br> 
            <h2>Editing {hotelName}</h2>
            <br></br>
            <input
              placeholder="Hotel Name"
              onChange={(e) => setName(e.target.value)}
            />{" "}
            <br></br>
            <input
              placeholder="Location" 
              onChange={(e) => setLocation(e.target.value)}
            />
            <br></br>
            <input
              placeholder="Price"
              onChange={(e) => setPrice(e.target.value)}
            ></input>{" "}
             <br></br> <input
              placeholder="Link from Google maps..."
              onChange={(e) => setMap(e.target.value)}
            ></input>{" "}
            <br></br>
            <br></br>
            <br></br>
            <input
              type="file"
              id="file"
              accept="image/*"
              onChange={handleChange}
            />
      
          </div>

          <div className="cardImage">
            <img
              className="hotel-pic"
              src={hotel.image}
              alt={hotel.name}
            />
          </div>
          <div className="detailsH">
            <p className="hotel-name">{hotel.name}</p>
            <p>{hotel.location}</p>
            <p>R {hotel.price}.00</p>
            {/* <textarea> {hotel.description}</textarea> */}
          </div>
        
        </div>
      ))}
    </div>
  );
};

export default Remove;
