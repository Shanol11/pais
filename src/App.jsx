import React from "react";
import { useState,useEffect } from "react";
import {  Route, Routes,useLocation } from "react-router-dom";
import Home from "./Pages/Home"
import Contact from "./Pages/contact";
import Gallery from "./Pages/Gallery";
import Weddingmenu from "./Pages/Weddingmenu";
import Wedding60 from "./Pages/Wedding60";
import Wedding70 from "./Pages/Wedding70";
import Wedding80 from "./Pages/Wedding80";
import Engagement from "./Pages/Engagement";
import Babyshower from "./Pages/Babyshower";
import Annaprasana from "./Pages/Annaprasana";
import Birthday from "./Pages/Birthday";
import Housebreakfast from "./Pages/Housebreakfast";
import Houselunch from "./Pages/Houselunch";
import Mehndi from "./Pages/Mehndi";
import Corporate from "./Pages/Corporate";
import Retirement from "./Pages/Retirement";
import Livecounter from "./Pages/Livecounter";
import Stalls from "./Pages/Stalls";
import Rose from "./Pages/Rose";
import Preloader from "./Pages/Preloader";
import Navbar from "./Component/Navbar";
import Footerpart from "./Component/Footerpart";

import Services from "./Pages/Services";
import About from "./Pages/About";
import Scrolltop from "./Pages/Scrolltop";




export default function App  () {
  const [loading, setLoading] = useState(false);
    const location = useLocation(); // Detect page changes

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500); // Show loader for 1.5s

        return () => clearTimeout(timer);
    }, [location]); // Run effect on page change
    return(
      <div>
        
           {loading && <Preloader/>} {/* Show preloader */}
    
      <Navbar/>
      <Scrolltop/>
     <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/gallery" element={<Gallery/>}/>
         <Route path="/services" element={<Services/>}/>
         <Route path="/wedding" element={<Weddingmenu/>}/>
         <Route path="/60wedding" element={<Wedding60/>}/>
         <Route path="/70wedding" element={<Wedding70/>}/>
         <Route path="/80wedding" element={<Wedding80/>}/>
         <Route path="/engagement" element={<Engagement/>}/>
         <Route path="/babyshower" element={<Babyshower/>}/>
         <Route path="/annaprasana" element={<Annaprasana/>}/>
         <Route path="/birthday" element={<Birthday/>}/>
         <Route path="/housebreakfast" element={<Housebreakfast/>}/>
         <Route path="/houselunch" element={<Houselunch/>}/>
         <Route path="/mehndi" element={<Mehndi/>}/>
         <Route path="/corporate" element={<Corporate/>}/>
         <Route path="/retirement" element={<Retirement/>}/>
         <Route path="/live" element={<Livecounter/>}/>
         <Route path="/counterr" element={<Stalls/>}/>
         <Route path="/Rose" element={<Rose/>}/>


         

     </Routes>
     
    
     <Footerpart/>
    </div>
     
  );
}


