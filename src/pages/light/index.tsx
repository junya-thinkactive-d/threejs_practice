import React from "react";
import AmbientLight from "./AmbientLight";
import DirectionalLight from "./DirectionalLight";
import HemisphereLight from "./HemisphereLight";
import PointLight from "./PointLight";
import SpotLight from "./SpotLIght";
import RectAreaLight from "./RectAreaLight";

const Light = () => {
  return (
    <>
      <div className="flex justify-center items-center py-4 text-white font-black text-2xl my-2 bg-amber-400">
        Light
      </div>
      <div className="flex justify-between flex-wrap gap-8">
        <AmbientLight />
        <DirectionalLight />
        <HemisphereLight />
        <PointLight />
        <SpotLight />
        <RectAreaLight />
      </div>
    </>
  );
};

export default Light;
