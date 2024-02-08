import ShowContext from "../context/ShowContext";
import { useContext } from "react";
import React from "react";
function Loader() {
  const {isloading}=useContext(ShowContext)
    return(
        <>
{
  isloading && (

        <div className="d-flex loading justify-content-center align-items-center position-relative" style={{backgroundColor:"#0D0516",height:"100vh"}}>

<div className="spinner-grow text-primary" style={{width: "3rem", height: "3rem"}} role="status">
  <span className="visually-hidden">Loading...</span>
</div>
        </div>
  )
}
        </>
    )
}

export default Loader;