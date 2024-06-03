"use client"
import { cn } from "@/lib/utils";
import React from "react";
import { FaStar } from "react-icons/fa";

function Runes() {
  return (
    <div className="bg-blur-white backdrop-blur-md p-4 flex flex-col gap-4">
      <h1 className="flex items-center font-bold text-xl">Runes</h1>
      <div className="flex items-center flex-wrap gap-4 justify-center lg:justify-start">
        <div className="bg-blur-white p-2 rounded-lg flex items-center gap-2 cursor-pointer">
          <img
            src="/runes/crit.webp"
            alt="hero_img"
            className="w-9 h-9 brightness-90 rounded-md"
          />
          <h2 className="font-semibold">Level: 23 (Unleash: 22)</h2>
        </div>
        
        <div className="bg-blur-white p-2 rounded-lg flex items-center gap-2 cursor-pointer">
          <img
            src="/runes/dame.webp"
            alt="hero_img"
            className="w-9 h-9 brightness-90 rounded-md"
          />
          <h2 className="font-semibold">Level: 23 (Unleash: 22)</h2>
        </div>

        <div className="bg-blur-white p-2 rounded-lg flex items-center gap-2 cursor-pointer">
          <img
            src="/runes/hero.webp"
            alt="hero_img"
            className="w-9 h-9 brightness-90 rounded-md"
          />
          <h2 className="font-semibold">Level: 23 (Unleash: 22)</h2>
        </div>

        <div className="bg-blur-white p-2 rounded-lg flex items-center gap-2 cursor-pointer">
          <img
            src="/runes/heal.webp"
            alt="hero_img"
            className="w-9 h-9 brightness-90 rounded-md"
          />
          <h2 className="font-semibold">Level: 23 </h2>
        </div>

        <div className="bg-blur-white p-2 rounded-lg flex items-center gap-2 cursor-pointer">
          <img
            src="/runes/cc.webp"
            alt="hero_img"
            className="w-9 h-9 brightness-90 rounded-md"
          />
          <h2 className="font-semibold">Level: 23</h2>
        </div>

        <div className="bg-blur-white p-2 rounded-lg flex items-center gap-2 cursor-pointer">
          <img
            src="/runes/mana.webp"
            alt="hero_img"
            className="w-9 h-9 brightness-90 rounded-md"
          />
          <h2 className="font-semibold">Level: 23</h2>
        </div>
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

export default Runes;
