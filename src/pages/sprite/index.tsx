import React from "react";
import SpriteMaterial from "./SpriteMaterial";

const Sprite = () => {
  return (
    <>
      <div className="flex justify-center items-center py-4 text-white font-black text-2xl my-2 bg-amber-400">
        Sprite
      </div>
      <div className="flex justify-between flex-wrap gap-8">
        <SpriteMaterial />
      </div>
    </>
  );
};

export default Sprite;
