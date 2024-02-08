"use client"
import React from "react";
import ShowContext from "./ShowContext.js";
import { useState,useEffect } from "react";
import { Suspense } from 'react'

const ShowContextProvider = ({children}) => {
    const [apiData, setApiData] = useState([]);
    const [isloading,setLoading]=useState(false)
    const [isopen,setIsOpen]=useState(false)
    let finalimage=[]
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try{
        const response = await fetch(
            "https://602e7c2c4410730017c50b9d.mockapi.io/users"
          ).then((res)=>res.json());
          setApiData(response)
        //   const data =response.json();
        await new Promise((resolve) => setTimeout(resolve, 2000));

      }finally{
        setLoading(false)
      }
    };
      
    fetchData();
  }, []);
    return(
        <ShowContext.Provider value={{apiData,isloading,isopen,setIsOpen,finalimage}}>    
        {children}
        </ShowContext.Provider>
    )
   
}
export default ShowContextProvider