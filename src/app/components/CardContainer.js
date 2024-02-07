"use client"
import React, { useContext,useState } from "react";
import ShowContext from "../context/ShowContext.js";
import Card from "./Card.js";
import Modals from "./Modal.js";
function Cardcontainer() {
  const { apiData } = useContext(ShowContext);
  const [selectedShow, setSelectedShow] = useState(null);

  const handleDetailsClick = (showDetails) => {
    console.log("Details button clicked");
    
    setSelectedShow(showDetails);
   
  };

  const closeModal = () => {
    setSelectedShow(null);
  };

  if (!apiData) {
    return <div>Data not received</div>;
  }

  return (
    <>
    
    <div className=" justify-content-center cardContainer container gap-5 d-flex flex-wrap mt-3">
        {apiData.map((show,index) => (
          <div key={index}>
            <Card
              firstName={show?.profile?.firstName}
              lastName={show?.profile?.lastName}
              imageUrl={show?.avatar}
              id={show?.id}
              jobTitle={show?.jobTitle}
              onDetailsClick={() => handleDetailsClick(show?.id)}
            />
          </div>
        ))}
        {selectedShow && (
        <Modals
        firstName={apiData[selectedShow-1]?.profile?.firstName}
        lastName={apiData[selectedShow-1]?.profile?.lastName}
        imageUrl={apiData[selectedShow-1]?.avatar}
        id={apiData[selectedShow-1]?.id}
        jobTitle={apiData[selectedShow-1]?.jobTitle}
        details={apiData[selectedShow-1]}
        onClose={closeModal}
        />
      )}
        
      </div>
      
   
      

      
    </>
  );
}

export default Cardcontainer;
