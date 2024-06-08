"use client"
import { cn } from "@/lib/utils";
import React from "react";
import { FaStar } from "react-icons/fa";
import { TRunes } from "../profile/profile-game";

function Runes({runes}:{runes: TRunes}) {
  return (
    <div className="bg-blur-white backdrop-blur-md p-4 flex flex-col gap-4">
      <h1 className="flex items-center font-bold text-xl">Runes</h1>
      <div className="flex items-center flex-wrap gap-4 justify-start">
        <div className="bg-blur-white p-2 rounded-lg flex items-center gap-2 cursor-pointer">
          <img
            src="/runes/crit.webp"
            alt="hero_img"
            className="w-9 h-9 brightness-90 rounded-md"
          />
          <h2 className="font-semibold">Level: {runes.crit.split("-")[0]} (Unleash: {runes.crit.split("-")[1]})</h2>
        </div>
        
        <div className="bg-blur-white p-2 rounded-lg flex items-center gap-2 cursor-pointer">
          <img
            src="/runes/dame.webp"
            alt="hero_img"
            className="w-9 h-9 brightness-90 rounded-md"
          />
          <h2 className="font-semibold">Level: {runes.dame.split("-")[0]} (Unleash: {runes.dame.split("-")[1]})</h2>
        </div>

        <div className="bg-blur-white p-2 rounded-lg flex items-center gap-2 cursor-pointer">
          <img
            src="/runes/hero.webp"
            alt="hero_img"
            className="w-9 h-9 brightness-90 rounded-md"
          />
          <h2 className="font-semibold">Level: {runes.hero.split("-")[0]} (Unleash: {runes.hero.split("-")[1]})</h2>
        </div>

        <div className="bg-blur-white p-2 rounded-lg flex items-center gap-2 cursor-pointer">
          <img
            src="/runes/heal.webp"
            alt="hero_img"
            className="w-9 h-9 brightness-90 rounded-md"
          />
          <h2 className="font-semibold">Level: {runes.heal}</h2>
        </div>

        <div className="bg-blur-white p-2 rounded-lg flex items-center gap-2 cursor-pointer">
          <img
            src="/runes/cc.webp"
            alt="hero_img"
            className="w-9 h-9 brightness-90 rounded-md"
          />
          <h2 className="font-semibold">Level: {runes.cc}</h2>
        </div>

        <div className="bg-blur-white p-2 rounded-lg flex items-center gap-2 cursor-pointer">
          <img
            src="/runes/mana.webp"
            alt="hero_img"
            className="w-9 h-9 brightness-90 rounded-md"
          />
          <h2 className="font-semibold">Level: {runes.mana}</h2>
        </div>
      </div>
    </div>
  );
}

export default Runes;
