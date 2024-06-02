import React from "react";
import ItemLog from "./item-log";

function ListLog() {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-blur-white backdrop-blur-md duration-500 p-4 rounded-lg cursor-pointer flex items-center">
        <div className="flex flex-col">
          <h2 className="font-bold text-lg text-sky-600">Nhật ký leo day</h2>
          <p className="text-sm line-clamp-1">Giúp bạn dễ dàng leo day hơn.</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <ItemLog lv_hero={12} />
        <ItemLog lv_hero={4} />
        <ItemLog lv_hero={8} />
        <ItemLog lv_hero={19} />
        <ItemLog lv_hero={16} />
      </div>
    </div>
  );
}

export default ListLog;
