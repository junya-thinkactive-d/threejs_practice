import React from "react";
import GroupObject from "./GroupObject";

const Group = () => {
  return (
    <>
      <div className="text-2xl my-2">Group</div>
      <div className="flex justify-between flex-wrap gap-8">
        <GroupObject />
      </div>
    </>
  );
};

export default Group;
