"use client"
import React from "react";
import ItemLog from "../homepage/item-log";

function ListLog() {
  return (
    <div className="bg-blur-white backdrop-blur-md p-4 flex flex-col gap-4 pb-12">
      <h1 className="flex items-center font-bold text-xl">Nhật ký leo day</h1>
      <div className="grid lg:grid-cols-2 gap-4">
        <ItemLog lv_hero={12} />
        <ItemLog lv_hero={12} />
        <ItemLog lv_hero={12} />
        <ItemLog lv_hero={12} />
        <ItemLog lv_hero={12} />
        <ItemLog lv_hero={12} />
      </div>
    </div>
  );
}

export default ListLog;
