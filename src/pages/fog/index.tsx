import React from "react";
import SceneFog from "./SceneFog";

const Fog = () => {
  return (
    <>
      <div className="flex justify-center items-center py-4 text-white font-black text-2xl my-2 bg-amber-400">Fog</div>
      <div className="flex justify-between flex-wrap gap-8">
        <SceneFog />
      </div>
    </>
  );
};

export default Fog;
