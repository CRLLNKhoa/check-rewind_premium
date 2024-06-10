"use client"
import React, { useEffect, useState } from "react";
import ItemLog from "./item-log";
import { TLog } from "@/types";
import { getLogs } from "@/action/logs";

function ListLog() {
  const [list,setList] = useState<TLog[]>([])

  useEffect(() => {
    const get = async () => {
      const result = await getLogs()
      if(result?.status === 200){
        setList(result.data)
      }
    }
    get()
  }, [])
  
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-blur-white backdrop-blur-md duration-500 p-4 rounded-lg cursor-pointer flex items-center">
        <div className="flex flex-col">
          <h2 className="font-bold text-lg text-sky-600">Nhật ký leo day</h2>
          <p className="text-sm line-clamp-1">Giúp bạn dễ dàng leo day hơn.</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {list.map((item:TLog) => (
          <ItemLog log={item} />
        ))}
        
      </div>
    </div>
  );
}

export default ListLog;
