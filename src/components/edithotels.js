
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  addDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, storage, } from "./firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import '../css/editHotels.css'


const Remove = () => {
  const [details, setDetails] = useState([]);
  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [hotelId, setHotelId] = useState("");
  const [hotelName, setHotelName] = useState("");
  const [map, setMap] = useState("");


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
          description: doc.data().description,
          id: doc.id,

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
  const editHotel = async (id, name) => {
    document.querySelector(".edit").style.display = "block";

    setHotelId(id)
    setHotelName(name)
 
  };

  const close = () => {
    document.querySelector(".edit").style.display = "none";
  };
  const updateHotel = async () => {
    const storageRef = ref(
      storage,
      `/images/${file.name}`
    );
    const uploadImage = uploadBytesResumable(storageRef, file);
    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },
      (err) => {
        console.log(err);
      },
      getDownloadURL(uploadImage.snapshot.ref).then((url) => {
        const hotelDoc = doc(db, "hotels", (JSON.stringify({ hotelId })).substring(12, 32));
        const newHotelDetails = {
          name: name,
          location: location,
          map: map,
          price: price,
          description: description,
          image: url
        };
        updateDoc(hotelDoc, newHotelDetails)


      })
        .then(() => {
          alert("Updated Successfully", { type: "success" });

        })
        .catch((err) => {
          alert("Error adding hotel", { type: "error" });
        }))






    //  console.log((JSON.stringify({hotelId})).substring(12,32))
  };
  return (
    <div className="editContainer">
      <h2 className="manageHotels">Manage Hotels</h2>

      {details.map((hotel, id) => (
        <div className="editCad" key={id}>
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
              placeholder="Location link"
              onChange={(e) => setMap(e.target.value)}
            ></input>{" "}
            <br></br> <input
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
            <button
              className="btn-update"
              onClick={updateHotel}
            >
              Update
            </button>
          </div>

          <div className="cardImageEdit">
            <img
              className="hotel-Edit"
              src={hotel.image}
              alt={hotel.name}
            />
          </div>
          <div className="detailsE">
            <p className="hotel-name">{hotel.name}</p>
            <p>{hotel.location}</p>
            <p>R {hotel.price}</p>
            <p className="descHotel"> {hotel.description}</p>
          </div>
          <div className="options">
            <button className="edit-btn" onClick={(e) => editHotel(hotel.id, hotel.name)}>
              Edit
            </button>
            <button
              className="remove-btn"
              onClick={() => deleteHotel(hotel.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Remove;
