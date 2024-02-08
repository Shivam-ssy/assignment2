import React from "react";
import { RiCloseLine } from "@remixicon/react";
import ShowContext from "../context/ShowContext";
import { useContext } from "react";
 function SideBar({className=""}){
        const {setIsOpen}=useContext(ShowContext);
    return(
        <>
            <div className={`bg-primary sideBar position-fixed ${className}`}>
                <RiCloseLine onClick={()=>(setIsOpen(false))} style={{position:'relative',top:'2em',left:'2em',cursor:'pointer' }}/>
            </div>
        </>
    )
 }
 export default SideBar;