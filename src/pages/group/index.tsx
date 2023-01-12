import React from "react";
import GroupObject from "./GroupObject";

const Group = () => {
  return (
    <>
      <div className="flex justify-center items-center py-4 text-white font-black text-2xl my-2 bg-amber-400">Group</div>
      <div className="flex justify-between flex-wrap gap-8">
        <GroupObject />
      </div>
    </>
  );
};

export default Group;
