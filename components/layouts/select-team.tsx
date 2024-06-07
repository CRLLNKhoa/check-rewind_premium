"use client";
import React, { useState } from "react";
import { SlotHero } from "./hero-slot";

export type THero = {
  index: number;
  name: string;
  star: number;
  avatar: string;
};

function SelectTeam({ team, setTeam }: { team: THero[]; setTeam: any }) {
  return (
    <div className="flex items-center flex-wrap gap-8 mb-4">
      {team.map((item: THero) => (
        <SlotHero key={item.index} team={team} slot={item} setTeam={setTeam} />
      ))}
    </div>
  );
}

export default SelectTeam;
