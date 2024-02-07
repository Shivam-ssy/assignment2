"use client"
import Cardcontainer from "./components/CardContainer.js";
import ShowContextProvider from "./context/ShowContextProvider";
import "./globals.css"
import Navigation from "./components/Navigation.js";
import Loader from "./components/loading.js";
export default function Home() {
  
  
  return (
    <>
    <div>

    <Navigation/>
     
    <ShowContextProvider>
      <Loader/>
      
          <Cardcontainer/>
      
    </ShowContextProvider>
       
    </div>
    </>
  );
}
