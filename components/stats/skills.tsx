"use client"
import React from "react";

function Skills() {
  return (
    <div className="bg-blur-white backdrop-blur-md p-4 flex flex-col gap-4">
      <h1 className="flex items-center font-bold text-xl">Skills</h1>
      <div className="flex items-center flex-wrap gap-4 justify-center lg:justify-start">
        <div className="bg-blur-white p-2 rounded-lg flex items-center gap-2 cursor-pointer">
          <img
            src="/skill/em.webp"
            alt="hero_img"
            className="w-9 h-9 brightness-90 rounded-md"
          />
          <h2 className="font-semibold">Level: 23ac</h2>
        </div>
        
        <div className="bg-blur-white p-2 rounded-lg flex items-center gap-2 cursor-pointer">
          <img
             src="/skill/bd.webp"
            alt="hero_img"
            className="w-9 h-9 brightness-90 rounded-md"
          />
          <h2 className="font-semibold">Level: 23ac</h2>
        </div>

        <div className="bg-blur-white p-2 rounded-lg flex items-center gap-2 cursor-pointer">
          <img
              src="/skill/up.webp"
            alt="hero_img"
            className="w-9 h-9 brightness-90 rounded-md"
          />
          <h2 className="font-semibold">Level: 23ac</h2>
        </div>

        <div className="bg-blur-white p-2 rounded-lg flex items-center gap-2 cursor-pointer">
          <img
             src="/skill/in.webp"
            alt="hero_img"
            className="w-9 h-9 brightness-90 rounded-md"
          />
          <h2 className="font-semibold">Level: 23 </h2>
        </div>

        <div className="bg-blur-white p-2 rounded-lg flex items-center gap-2 cursor-pointer">
          <img
             src="/skill/hl.webp"
            alt="hero_img"
            className="w-9 h-9 brightness-90 rounded-md"
          />
          <h2 className="font-semibold">Level: 23</h2>
        </div>

        <div className="bg-blur-white p-2 rounded-lg flex items-center gap-2 cursor-pointer">
          <img
             src="/skill/ms.webp"
            alt="hero_img"
            className="w-9 h-9 brightness-90 rounded-md"
          />
          <h2 className="font-semibold">Level: 23</h2>
        </div>

        <div className="bg-blur-white p-2 rounded-lg flex items-center gap-2 cursor-pointer">
          <img
             src="/skill/bs.webp"
            alt="hero_img"
            className="w-9 h-9 brightness-90 rounded-md"
          />
          <h2 className="font-semibold">Level: 23</h2>
        </div>
      </div>
    </div>
  );
}


export default Skills;
