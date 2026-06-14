import React from "react";
import NavBar from "./componets/NavBar";
import Work from "./componets/Work";
import Stripes from "./componets/Stripes";
import Products from "./componets/Products";
import Marquees from "./componets/Marquees";
import Cards from "./componets/Cards";
import Footer from "./componets/Footer";
import LocomotiveScroll from 'locomotive-scroll';
const App = () => {
  const scroll = new LocomotiveScroll();
  return (
    <>
    <div className="w-full h-full bg-zinc-900 text-white">
   <NavBar />
   <Work />
   <Stripes/>
   <Products/>
   <Marquees/>
    <Cards/>  
    <Footer />
    </div>
    </>
  )
}

export default App