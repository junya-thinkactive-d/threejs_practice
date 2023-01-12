import React from "react";
import PositionForWorld from "./PositionForWorld";

const WorldPosition = () => {
  return (
    <>
      <div className="flex justify-center items-center py-4 text-white font-black text-2xl my-2 bg-amber-400">
        World Position
      </div>
      <div className="flex justify-between flex-wrap gap-8">
        <PositionForWorld />
      </div>
    </>
  );
};

export default WorldPosition;
