
import React, { useState } from 'react';
import '../css/login.css'
import { useHistory } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth,db } from './firebase';
import { useNavigate } from "react-router-dom";


export default function Login()
{
 const navigate=useNavigate();
const[email,setEmail]=useState('');
const[password,setPassword]=useState('')



const handleLogin=(()=>
{
    if(document.getElementById("email").value==="" && 
    document.getElementById("password").value==="")
    {
        document.getElementById("err1").style.display = "block";
        document.getElementById("err2").style.display = "block";

    }
    else if(document.getElementById("email").value==="")
    {}
    else
     if(document.getElementById("password").value==="")
     {
        document.getElementById("err2").style.display = "block";
 
     }else{
signInWithEmailAndPassword(auth,email,password).then((userCredential)=>
{
    const user = userCredential.user;
    navigate('/home')
    alert("Admin successfully logged in")
}).catch((error)=>{
    console.log(error)
})        
   
     }
})

    return(
        <div className="mainDiv">
            <div className="detailsDiv">
                <h1 className="h1Login">McFarlaneBooking Admin</h1>
                <input id="email" type="email" placeholder="Enter username" onChange={(e)=>setEmail(e.target.value)}>
                    
                  
                </input>
                <span id="err1">Username is required!!! </span>
                <input id="password" type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}/>
                <span id="err2">Password is required!!! </span>
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    )
}