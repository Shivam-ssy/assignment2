"use client"
import React, { useEffect,useState } from "react";
import ShowContext from "../context/ShowContext";
import { useContext } from "react";
function Card({
    id,firstName="not found!",lastName="not found!",imageUrl,onDetailsClick,jobTitle
}) {
  let image="user-fill.svg"
  const {isloading ,finalimage}=useContext(ShowContext)
  const [finalImageUrl, setFinalImageUrl] = useState(imageUrl);
  
  useEffect(() => {
    const imageCheck = async () => {
      try {
        const response = await fetch(imageUrl);
        if (!response.ok) {
          // If fetch fails, update imageUrl to default value
          setFinalImageUrl("user-fill.svg");
         
        }
      } catch (error) {
        console.error('Error fetching image:', error);
        // If fetch throws an error, update imageUrl to default value
        setFinalImageUrl("user-fill.svg");
      }
    };
    
    imageCheck();
  }, [imageUrl]);
  finalimage.push(finalImageUrl)
  return (
    <>
    {
      !isloading && (

      <div className="">
        <div className="card" style={{width: "18rem"}}>
          <div className="">

          <img draggable="false" src={finalImageUrl} className="card-img-top rounded-circle" text-bg-danger  alt="No avatar to show or not found" style={{height: "15rem"}}/>
          </div>
          <div className="card-body">
            <h5 className="card-title">{`${firstName} ${lastName}`}</h5>
            <div className="card-text">
                <span>{jobTitle}</span>
            </div>
            <div className="d-flex justify-content-between">
                <button onClick={() => onDetailsClick()} className="btn btn-sm btn-secondary">More Details</button>
            </div>
            
          </div>
        </div>
        
    

      </div>
      )
    }
    </>
  );
}
export default Card;
