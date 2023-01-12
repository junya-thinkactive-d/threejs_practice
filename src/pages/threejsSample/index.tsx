import React from "react";
import Sample from "./Sample";
import SampleMaterialAndLighting from "./SampleMaterialAndLighting";
import SampleMaterialAndLighting2 from "./SampleMaterialAndLighting2";

const ThreejsSample = () => {
  return (
    <>
      <div className="flex justify-center items-center py-4 text-white font-black text-2xl my-2 bg-amber-400">
        Three.js Sample
      </div>
      <div className="flex justify-between flex-wrap gap-8">
        <Sample />
        <SampleMaterialAndLighting />
        <SampleMaterialAndLighting2 />
      </div>
    </>
  );
};

export default ThreejsSample;
