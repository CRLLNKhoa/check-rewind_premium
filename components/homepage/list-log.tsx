"use client";
import React, { useEffect, useState } from "react";
import ItemLog from "./item-log";
import { TLog } from "@/types";
import { getLogs } from "@/action/logs";
import Link from "next/link";

function ListLog() {
  const [list, setList] = useState<TLog[]>([]);
  const [isloading, setisloading] = useState(true);

  useEffect(() => {
    setisloading(true);
    const get = async () => {
      const result = await getLogs();
      if (result?.status === 200) {
        setList(result.data);
        setisloading(false);
      }
      setisloading(false);
    };
    get();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-blur-white backdrop-blur-md duration-500 p-4 rounded-lg cursor-pointer flex items-center">
        <div className="flex flex-col w-full">
          <h2 className="font-bold text-lg text-sky-600">Nhật ký leo day</h2>
          <div className="flex items-center justify-between w-full">
            <p className="text-sm line-clamp-1">
              Giúp bạn dễ dàng leo day hơn.
            </p>
            <Link className="text-sky-600" href="/logs?page=1">Xem thêm</Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {list.map((item: TLog) => (
          <ItemLog key={item.id} log={item} />
        ))}
        {isloading && (
          <>
            <div className="bg-blur-white backdrop-blur-md p-4 h-20 rounded-lg animate-pulse"></div>
            <div className="bg-blur-white backdrop-blur-md p-4 h-20 rounded-lg animate-pulse"></div>
            <div className="bg-blur-white backdrop-blur-md p-4 h-20 rounded-lg animate-pulse"></div>
            <div className="bg-blur-white backdrop-blur-md p-4 h-20 rounded-lg animate-pulse"></div>
            <div className="bg-blur-white backdrop-blur-md p-4 h-20 rounded-lg animate-pulse"></div>
            <div className="bg-blur-white backdrop-blur-md p-4 h-20 rounded-lg animate-pulse"></div>
          </>
        )}
      </div>
    </div>
  );
}

export default ListLog;
