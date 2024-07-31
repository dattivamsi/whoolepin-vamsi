import React, { useState } from "react";
import "./App.css";
import statueImage from "../src/assets/statue.png";
import backgroundImage from "../src/assets/background.png";
import { CiCircleChevLeft } from "react-icons/ci";
import { IoMdHeartDislike } from "react-icons/io";
import { FaShareAlt } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import { FaAnglesLeft, FaAnglesRight, FaArrowRightLong } from "react-icons/fa6";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showMore,setShowMore] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleShowContent = () =>{
    setShowMore(!showMore)
  }

  return (
    <div className="app">
      <div className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <button className="back-button">
          <CiCircleChevLeft className="icon" />
        </button>
        <p className="main-head">
          maitreya buddha in gesture of fearlessness (abhaya mudra)
        </p>
        <div className="icons-container">
          <button className="back-button">
            <IoMdHeartDislike className="icon" />
          </button>
          <button className="back-button">
            <FaShareAlt className="icon" />
          </button>
          <button className="back-button">
            <LuEye className="icon" />
          </button>
        </div>
        <div className="details-container">
          <p>Dynasty: Ahichhatra</p>
          <p>Period: 200CE</p>
          <p>Material: Sandstone</p>
          <p>Location: National Museum</p>
        </div>
        <div>
          <h3 className="description">Description</h3>
          <p className="note">
            Maitreya, the future Buddha to be, resides in the Tushita heaven as
            a bodhisattva waiting to redeem humanity. In Buddhism, Maitreya is
            the eighth Buddha, a successor of the seven historical
            Buddhas(septa-manushi Buddhas).The Diga Nikaya mentions, Maitreya
            Buddha will be born in Ketumati, in present-day varanasi, Uttara
            Pradesh. As a bodhisattva, Maiterya wears a heavily adorned with
            earrings, wristlets, neckleces, and amulet
          </p>
          {showMore && 
          <p>Additonal Content displayed Here....</p>
          }
        </div>
        <div className="arrow-container">
          <button className="right-arrow" onClick={()=>handleShowContent()}>
            <FaArrowRightLong className="icon" />
            {showMore ? "Less Content":"Read More"}
          </button>
        </div>
      </div>
      <div className="main-content">
        <button onClick={toggleSidebar} className="toggle-icon">
          {sidebarOpen ?<FaAnglesLeft className="icon" />:<FaAnglesRight className="icon"/>}
        </button>
        <div className="image-container">
          <img
            src={backgroundImage}
            alt="Background"
            className="background-image"
          />
          <img src={statueImage} alt="Statue" className="statue-image logo" />
        </div>
      </div>
    </div>
  );
}

export default App;
