import React from "react";
import SceneFog from "./SceneFog";

const Fog = () => {
  return (
    <>
      <div className="text-2xl my-2">Fog</div>
      <div className="flex justify-between flex-wrap gap-8">
        <SceneFog />
      </div>
    </>
  );
};

export default Fog;
