"use client";
import React from "react";
import { TSkills } from "../profile/profile-game";

function Skills({ skills }: { skills: TSkills }) {
  return (
    <div className="bg-blur-white backdrop-blur-md p-4 flex flex-col gap-4">
      <h1 className="flex items-center font-bold text-xl">Skills</h1>
      <div className="flex items-center flex-wrap gap-4 justify-start">
        <div className="bg-blur-white p-2 rounded-lg flex items-center gap-2 cursor-pointer">
          <img
            src="/skill/em.webp"
            alt="hero_img"
            className="w-9 h-9 brightness-90 rounded-md"
          />
          <h2 className="font-semibold">Level: {skills.em}</h2>
        </div>

        <div className="bg-blur-white p-2 rounded-lg flex items-center gap-2 cursor-pointer">
          <img
            src="/skill/bd.webp"
            alt="hero_img"
            className="w-9 h-9 brightness-90 rounded-md"
          />
          <h2 className="font-semibold">Level: {skills.bd}</h2>
        </div>

        <div className="bg-blur-white p-2 rounded-lg flex items-center gap-2 cursor-pointer">
          <img
            src="/skill/up.webp"
            alt="hero_img"
            className="w-9 h-9 brightness-90 rounded-md"
          />
          <h2 className="font-semibold">Level: {skills.up}</h2>
        </div>

        <div className="bg-blur-white p-2 rounded-lg flex items-center gap-2 cursor-pointer">
          <img
            src="/skill/in.webp"
            alt="hero_img"
            className="w-9 h-9 brightness-90 rounded-md"
          />
          <h2 className="font-semibold">Level: {skills.in} </h2>
        </div>

        <div className="bg-blur-white p-2 rounded-lg flex items-center gap-2 cursor-pointer">
          <img
            src="/skill/hl.webp"
            alt="hero_img"
            className="w-9 h-9 brightness-90 rounded-md"
          />
          <h2 className="font-semibold">Level: {skills.hl}</h2>
        </div>

        <div className="bg-blur-white p-2 rounded-lg flex items-center gap-2 cursor-pointer">
          <img
            src="/skill/ms.webp"
            alt="hero_img"
            className="w-9 h-9 brightness-90 rounded-md"
          />
          <h2 className="font-semibold">Level: {skills.ms}</h2>
        </div>

        <div className="bg-blur-white p-2 rounded-lg flex items-center gap-2 cursor-pointer">
          <img
            src="/skill/bs.webp"
            alt="hero_img"
            className="w-9 h-9 brightness-90 rounded-md"
          />
          <h2 className="font-semibold">Level: {skills.bs}</h2>
        </div>
      </div>
    </div>
  );
}

export default Skills;
