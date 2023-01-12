import React from "react";
import PerspectiveCamera from "./PerspectiveCamera";
import OrthographicCamera from "./OrthographicCamera";

const Camera = () => {
  return (
    <>
      <div className="text-2xl my-2">Camera</div>
      <div className="flex justify-between flex-wrap gap-8">
        <PerspectiveCamera />
        <OrthographicCamera />
      </div>
    </>
  );
};

export default Camera;
