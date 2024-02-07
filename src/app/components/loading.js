import ShowContext from "../context/ShowContext";
import { useContext } from "react";
import React from "react";
function Loader() {
  const {isloading}=useContext(ShowContext)
    return(
        <>
{
  isloading && (

        <div className="d-flex loading justify-content-center align-items-center">

  <div className="spinner-border " role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
        </div>
  )
}
        </>
    )
}

export default Loader;