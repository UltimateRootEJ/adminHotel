
import './App.css';
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import Login from './components/login';
import Home from './components/home';
import Manage from './components/manage';
import EditHotels from './components/edithotels';
import Hotels from './components/hotels';
import ViewOne from './components/view1';
import ViewTwo from './components/view2';
import ViewThree from './components/view3';
import Bookings from './components/bookings';
import AddHotel from './components/addhotel';


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login/>}></Route>
      <Route path="/home" element={<Home/>}/>
      <Route path="/manage" element={<Manage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/editHotels' element={<EditHotels/>}/>
      <Route path='/addhotel' element={<AddHotel/>}/>
      <Route path='/hotels' element={<Hotels/>}/>
      <Route path='/bookings' element={<Bookings/>}/>
      <Route path='/view1' element={<ViewOne/>}/>
      <Route path='/view2' element={<ViewTwo />}/>
      <Route path='/view3' element={<ViewThree />}/>

      


    </Routes>
    </BrowserRouter>
  );
}

export default App;
