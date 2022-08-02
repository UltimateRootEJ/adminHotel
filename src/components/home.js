import React from "react";
import NavBar from "./navBar";
import Hotels from "./hotels";
import Manage from "./manage";
import LeftNav from "./leftNav";
import { useState } from 'react'
import '../css/home.css'








export default function Home() {





    return (
        <div className="mainHome">

            <div className="left">
            <LeftNav/>


            </div>
            <div className="right">
              <Hotels/>

            </div>
        </div>

    )
}