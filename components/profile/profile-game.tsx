"use client";
import React, { useState } from "react";
import SelectTeam, { THero } from "../layouts/select-team";
import Skills from "./skills";
import Runes from "./runes";
import Days from "./days";
import WorldTree from "./world-tree";

export type TSkills = {
  em: string;
  bd: string;
  up: string;
  in: string;
  hl: string;
  ms: string;
  bs: string;
};

export type TRunes = {
  crit: string;
  dame: string;
  hero: string;
  heal: string;
  cc: string;
  mana: string;
};

export type TDays = {
  prevDay?: number
  currDay?: number
}

function ProfileGame() {

  const [tree,setTree] = useState("")

  const [days,setDays] = useState<TDays>({
    currDay: 0,
  })

  const [team, setTeam] = useState<THero[]>([
    { index: 0, name: "", star: 10, avatar: "" },
    { index: 1, name: "", star: 10, avatar: "" },
    { index: 2, name: "", star: 10, avatar: "" },
    { index: 3, name: "", star: 10, avatar: "" },
    { index: 4, name: "", star: 10, avatar: "" },
    { index: 5, name: "", star: 10, avatar: "" },
  ]);

  const [skills, setSkills] = useState({
    em: "",
    bd: "",
    up: "",
    in: "",
    hl: "",
    ms: "",
    bs: "",
  });

  const [runes, setRunes] = useState({
    crit: "",
    dame: "",
    hero: "",
    heal: "",
    cc: "",
    mana: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(days);
  };
  return (
    <div className=" p-4 rounded-lg">
      <form onSubmit={handleSubmit} className="flex flex-col  gap-4">
      <h1 className="text-xl">Day</h1>
        <Days days={days} setDays={setDays} />
        <h1 className="text-xl">Đội hình</h1>
        <SelectTeam team={team} setTeam={setTeam} />
        <h1 className="text-xl">Kỹ năng</h1>
        <Skills skills={skills} setSkills={setSkills} />
        <h1 className="text-xl">Runes</h1>
        <Runes runes={runes} setRunes={setRunes} />
        <h1 className="text-xl">World Tree</h1>
        <WorldTree tree={tree} setTree={setTree} />
        <button type="submit" className="bg-sky-600 p-4 text-white rounded-lg">
          Lưu thông tin
        </button>
      </form>
    </div>
  );
}

export default ProfileGame;
