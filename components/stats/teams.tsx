import { cn } from "@/lib/utils";
import React from "react";
import { FaStar } from "react-icons/fa";
import { THero } from "../layouts/select-team";

function Teams({ team }: { team: THero[] }) {
  return (
    <div className="bg-blur-white backdrop-blur-md p-4 flex flex-col gap-4">
      <h1 className="flex items-center font-bold text-xl">Teams</h1>
      <div className="flex items-center flex-wrap gap-4 justify-start">
        {team.map((item: THero) => (
          <div className="bg-blur-white p-2 rounded-lg flex items-center gap-2 cursor-pointer">
            <img
              src={`/heroes/${item.avatar}`}
              alt="hero_img"
              className="w-9 h-9 brightness-90 rounded-md"
            />
            <h2 className="font-semibold">{item.name}</h2>
            <StarHero lv_hero={item.star} />
          </div>
        ))}
      </div>
    </div>
  );
}

function StarHero({ lv_hero }: { lv_hero: number }) {
  return (
    <div className=" flex items-center bg-black px-2 py-1 rounded-md text-xs">
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
  );
}

export default Teams;
