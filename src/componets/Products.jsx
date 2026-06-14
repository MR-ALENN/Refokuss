import React, { useState } from "react";
import { motion, useScroll } from "motion/react";

import Product from "./Product";
const Products = () => {
  const products_data = [
    {
      name: "artiquel",
      desc: "An artistic and unique puzzle game that combines creativity with problem-solving mechanics, offering immersive visual experiences",
      case: false,
    },
    {
      name: "TTRL",
      desc: "A fast-paced action-adventure game featuring challenging levels, dynamic gameplay, and thrilling combat sequences",
      case: false,
    },
    {
      name: "BOBA",
      desc: "An interactive story-driven game with captivating narrative, memorable characters, and choices that impact the storyline",
      case: true,
    },
    {
      name: "GOW",
      desc: "An epic action-adventure game featuring powerful combat mechanics, mythological elements, and intense boss battles",
      case: true,
    },
    {
      name: "Jensi",
      desc: "A charming indie game with unique art style, engaging gameplay mechanics, and heartwarming narrative elements",
      case: false,
    },
    {
      name: "CLaude",
      desc: "A sophisticated puzzle-strategy game that challenges players with complex scenarios, tactical thinking, and innovative gameplay loops",
      case: true,
    },
  ];
  const [pos, setPos] = useState(0);
  // console.log(scrollYProgress);
  const mover=(val)=>{
setPos(val*13);
  }

  return (
    <div className="relative mt-15">
      {products_data.map((elem, index) => (
        <Product key={index} val={elem} mover={mover} count={index} />
      ))}
      <div className="absolute top-12 pointer-events-none h-full w-full">
        <motion.div
          initial={{ y: pos,x:"-50%" }}
          animate={{ y: pos + "rem" }}
          transition={{ease:[0.76,0,0.24,1], duration:.5}}
          className=" absolute left-[48%] w-[20rem] h-[13rem] rounded-xl bg-pink-400 overflow-hidden"
        >
        <motion.div

          animate={{ y: -pos + "rem" }}
          transition={{ease:[0.76,0,0.24,1], duration:.5}}
          className=" w-full h-full   bg-pink-600"
        ></motion.div>
        <motion.div
          
          animate={{ y: -pos + "rem" }}
          transition={{ease:[0.76,0,0.24,1], duration:.5}}
          className=" w-full h-full  bg-yellow-500"
        ></motion.div>
        <motion.div
          
          animate={{ y: -pos + "rem" }}
          transition={{ease:[0.76,0,0.24,1], duration:.5}}
          className=" w-full h-full   bg-pink-700"
        ></motion.div>
        <motion.div
          
          animate={{ y: -pos + "rem" }}
          transition={{ease:[0.76,0,0.24,1], duration:.5}}
          className=" w-full h-full   bg-pink-400"
        ></motion.div>
        <motion.div
          
          animate={{ y: -pos + "rem" }}
          transition={{ease:[0.76,0,0.24,1], duration:.5}}
          className=" w-full h-full   bg-pink-900"
        ></motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
