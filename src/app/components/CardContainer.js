"use client"
import React, { useContext, useState, useEffect } from "react";
import ShowContext from "../context/ShowContext.js";
import Card from "./Card.js";
import "../globals.css"
import { RiCloseLine } from "@remixicon/react";
import Modals from "./Modal.js";
import SideBar from "./SideBar.js";

function CardContainer() {
  const { apiData, isopen, setIsOpen,isloading} = useContext(ShowContext);
  const [selectedShow, setSelectedShow] = useState(null);
  const [sideBarWidth, setSidebarWidth] = useState("width100");
  const [cardWidth, setCardWidth] = useState("width100");
  const [display,setdisplay]=useState('d-none')
  const [imageUrl, setFinalImageUrl] = useState("user-fill.svg");
  const [screenWidth, setScreenWidth] = useState();
  useEffect(()=>{
    const handledisplay=()=>{
      if(isloading)
      setdisplay("d-none")
      else
      setdisplay("d-flex")
    }
    handledisplay();
  },[isloading])
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Set initial screen width
    setScreenWidth(window.innerWidth);

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  console.log(screenWidth);

  const handleDetailsClick = (showDetails) => {
    setIsOpen(true);
    setSelectedShow(showDetails);

    // Adjust width based on screen size
    if (screenWidth >= 900) {
      setCardWidth("width75");
      // setSidebarWidth("width25");
     
    } else if (screenWidth >= 600) {
      setCardWidth("width60");
      // setSidebarWidth("width60");

    } else {
      setCardWidth("invisible width0");
      setSidebarWidth("width100");
      console.log(sideBarWidth)
    }

    setFinalImageUrl(apiData[selectedShow]?.avatar);
  };

  const closeModal = () => {
    setSelectedShow(null);
    setIsOpen(false);
    setCardWidth("width100");
  };

  if (!apiData) {
    return <div>Data not received</div>;
  }

  return (
    <>
        
      <div className="mainContainer mt-3">
        <div className={`${display} pt-5 justify-content-center left-side align-items-center gap-4 flex-wrap ${cardWidth}`}>
          {apiData.map((show, index) => (
            <div key={index}>
              <Card
                firstName={show?.profile?.firstName}
                lastName={show?.profile?.lastName}
                imageUrl={show.avatar}
                id={show?.id}
                jobTitle={show?.jobTitle}
                onDetailsClick={() => handleDetailsClick(index)}
              />
            </div>
          ))}
        </div>
        {isopen && (
          <div className={`right-side border-secondary border  d-flex flex-column justify-content-center gap-3 text-white align-items-center ${sideBarWidth}`}>
            <RiCloseLine color="white" onClick={closeModal} style={{ position: 'absolute', top: '2em', right: '2em', cursor: 'pointer' }} />
            <div className="w-25">
              <img className="rounded" src={apiData[selectedShow]?.avatar} alt="image not found" />
            </div>
            <h5>{apiData[selectedShow]?.profile?.username}</h5>
            <div style={{ width: "100%", height: '1px', backgroundColor: 'white' }}></div>
            <div className="" syle={{ width: '100%' }}>
              <div className="d-flex gap-2 justify-content-start"><span style={{ width: '40%' }}>FirstName:</span><span >{apiData[selectedShow]?.profile?.firstName}</span> </div>
              <div className="d-flex gap-2 justify-content-start"><span style={{ width: '40%' }}>LastName:</span><span>{apiData[selectedShow]?.profile?.lastName}</span> </div>
              <div className="d-flex gap-2 justify-content-start"><span style={{ width: '40%' }}>Bio:</span><span className="text-break" >{apiData[selectedShow]?.Bio}</span> </div>
              <div className="d-flex gap-4 justify-content-start  "><span style={{ width: '40%' }}>Job Title:</span><span>{apiData[selectedShow]?.jobTitle}</span> </div>
              <div style={{ width: "100%", height: '1px', backgroundColor: 'white' }}></div>
            </div>
          </div>
        )}
      </div>
     
    </>
  );
}

export default CardContainer;
