import React from "react";
import PositionForScreen from "./PositionForScreen";

const ScreenPosition = () => {
  return (
    <>
      <div className="flex justify-center items-center py-4 text-white font-black text-2xl my-2 bg-amber-400">
        Screen Position
      </div>
      <div className="flex justify-between flex-wrap gap-8">
        <PositionForScreen />
      </div>
    </>
  );
};

export default ScreenPosition;
