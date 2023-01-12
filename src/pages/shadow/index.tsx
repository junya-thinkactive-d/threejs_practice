import React from "react";
import ShadowSample from "./ShadowSample";

const Shadow = () => {
  return (
    <>
      <div className="flex justify-center items-center py-4 text-white font-black text-2xl my-2 bg-amber-400">
        Shadow
      </div>
      <div className="flex justify-between flex-wrap gap-8">
        <ShadowSample />
      </div>
    </>
  );
};

export default Shadow;
