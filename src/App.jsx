import React from "react";
import NavBar from "./componets/NavBar";
import Work from "./componets/Work";

const App = () => {
  return (
    <>
    <div className="w-screen h-screen bg-zinc-900 text-white">
   <NavBar />
   <Work />
    </div>
    </>
  )
}

export default App