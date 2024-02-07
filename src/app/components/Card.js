import React from "react";
import ShowContext from "../context/ShowContext";
import { useContext } from "react";
function Card({
    id,firstName="not found!",lastName="not found!",imageUrl,onDetailsClick,jobTitle
}) {
  const {isloading}=useContext(ShowContext)
  return (
    <>
    {
      !isloading && (

      <div className="">
        <div className="card" style={{width: "18rem"}}>
          <img src={imageUrl} className="card-img-top" text-bg-danger  alt="No avatar to show or not found" style={{height: "15rem"}}/>
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
