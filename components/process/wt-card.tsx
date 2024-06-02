import { cn } from "@/lib/utils";
import React from "react";

function WtCard({text}:{text:string}) {
  return (
    <div className={cn("bg-white px-2 text-sm rounded-md font-bold text-white/80 hidden select-none",
    ["bt","te","ea","ac","bl"].includes(text.toLowerCase().slice(0,2)) && "bg-red-600/80 block",
    ["gw","as","in","rd","td"].includes(text.toLowerCase().slice(0,2)) && "bg-yellow-600 block",
    ["fa","ms","lb","sm","ap"].includes(text.toLowerCase().slice(0,2)) && "bg-sky-600/80 block",
    )}>
      <h3 className="uppercase">{text}</h3>
    </div>
  );
}

export default WtCard;
