import { cn } from "@/lib/utils";
import React from "react";
import { FaStar } from "react-icons/fa";

function HeroCard({ id_hero, lv_hero }: { id_hero: number; lv_hero: number }) {
  return (
    <div className="bg-[#D27D2C] size-14 rounded-md p-1 relative">
      <div className="border-2 border-[#4F3021] shadow-lg w-full h-full rounded-md">
        <img src={`/hero/${id_hero}.png`} alt="hero" className="w-full h-full" />
      </div>
      <div className="absolute flex items-center bg-black px-2 rounded-md text-xs left-1/2 -translate-x-1/2 -bottom-2">
       <p className="text-white font-bold mr-1"> {lv_hero}</p>
        <FaStar
          className={cn(
            "text-black",
            lv_hero > 0 && lv_hero < 6 && "text-yellow-500",
            lv_hero > 5 && lv_hero < 11 && "text-red-500",
            lv_hero > 10 && lv_hero < 16 && "text-white",
            lv_hero > 15 && lv_hero < 21 && "text-purple-500"
          )}
        />
      </div>
    </div>
  );
}

export default HeroCard;
