import React from "react";
import GLTFModel from "./GLTFModel";

const ReadingModel = () => {
  return (
    <>
      <div className="flex justify-center items-center py-4 text-white font-black text-2xl my-2 bg-amber-400">
        GLTFModels
      </div>
      <div className="flex justify-between flex-wrap gap-8">
        <GLTFModel />
      </div>
    </>
  );
};

export default ReadingModel;
