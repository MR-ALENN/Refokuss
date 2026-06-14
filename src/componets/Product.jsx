import React from "react";
import Button from "./Button";
const Product = ({ val, mover, count }) => {
  return (
    <div className="w-full py-3 text-white">
      <div onMouseEnter={()=>{mover(count)}} className="max-w-6xl mx-auto flex justify-between items-center py-7 px-5">
        <h1 className="text-6xl capitalize">{val.name}</h1>
        <div className="w-1/3">
          <p>{val.desc}</p>
          <div className="Buttons flex gap-5 mt-10">
            <Button />
            {val.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
