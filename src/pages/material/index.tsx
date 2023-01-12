import React from "react";
import MeshBasicMaterial from "./MeshBasicMaterial";
import MeshNormalMaterial from "./MeshNormalMaterial";
import MeshLambertMaterial from "./MeshLambertMaterial";
import MeshStandardMaterial from "./MeshStandardMaterial";
import MeshToonMaterial from "./MeshToonMaterial";

const Material = () => {
  return (
    <>
      <div className="flex justify-center items-center py-4 text-white font-black text-2xl my-2 bg-amber-400">
        Material
      </div>
      <div className="flex justify-between flex-wrap gap-8">
        <MeshBasicMaterial />
        <MeshNormalMaterial />
        <MeshLambertMaterial />
        <MeshToonMaterial />
        <MeshStandardMaterial />
      </div>
    </>
  );
};

export default Material;
