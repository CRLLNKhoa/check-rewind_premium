import React from "react";

function WorldTree({
  tree,
  setTree,
}: {
  tree: string;
  setTree: (state: string) => void;
}) {
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <input
        value={tree}
        onChange={(e) => setTree(e.target.value)}
        pattern="^([a-zA-Z]{2}\d-)*[a-zA-Z]{2}\d$"
        type="text"
        className="h-12 w-full outline-none text-md px-4"
        placeholder="Nhập theo cú pháp BT1-GW2-TE1-IN1"
      />
    </div>
  );
}

export default WorldTree;
