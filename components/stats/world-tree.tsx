import { cn } from "@/lib/utils";
import React from "react";

function WorldTree({ wt }: { wt: string }) {
  return (
    <div className="bg-blur-white backdrop-blur-md p-4 flex flex-col gap-4">
      <h1 className="flex items-center font-bold text-xl">World Tree</h1>
      <div className="flex items-center flex-wrap gap-4 justify-start">
        {wt.split("-").map((item: string) => (
          <div key={item} className="bg-blur-white p-2 rounded-lg flex items-center gap-2 cursor-pointer">
            <div
              className={cn("size-9 flex items-center justify-center rounded-lg text-white font-bold uppercase",
                ["te","ac","bt","ea"].includes(item.slice(0,2).toLocaleLowerCase()) && "bg-red-500",
                ["in","td","gw","rd","as"].includes(item.slice(0,2).toLocaleLowerCase()) && "bg-yellow-500"
              )}
            >
              {item.slice(0,2)}
            </div>
            <h2 className="font-semibold">Level: {item.slice(2)}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorldTree;
