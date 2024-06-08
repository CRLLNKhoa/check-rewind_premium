"use client";
import React from "react";
import ItemLog from "../homepage/item-log";
import { TLog } from "@/types";
import { log } from "console";

function ListLog({ logs }: { logs: TLog[] }) {
  console.log(logs);
  return (
    <div className="bg-blur-white backdrop-blur-md p-4 flex flex-col gap-4 pb-12">
      <h1 className="flex items-center font-bold text-xl">Nhật ký leo day</h1>
      <div className="grid lg:grid-cols-2 gap-4">
        {logs.map((item: TLog,index:number) => (
          <ItemLog key={index} log={item} />
        ))}
      </div>
    </div>
  );
}

export default ListLog;
