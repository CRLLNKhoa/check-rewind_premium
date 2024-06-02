"use client";
import FormAdd from "@/components/process/form-add";
import UserInfo from "@/components/process/user-info";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

export type TLog = {
  player_name: string;
  day: number;
  rewind: number;
  weapon: number;
  rune_crit: string;
  rune_dame: string;
  rune_hero: string;
  rune_heal: string;
  rune_cc: string;
  rune_mana: string;
  world_tree: string;
  hero: string[];
  skill_em: string;
  skill_bd: string;
  skill_up: string;
  skill_in: string;
  skill_hl: string;
  skill_ms: string;
  skill_bs: string;
  note: string;
};

function NewLogsPage() {
  const [data, setData] = useState<TLog>({
    player_name: "",
    day: 0,
    rewind: 0,
    weapon: 0,
    rune_crit: "",
    rune_dame: "",
    rune_hero: "",
    rune_heal: "",
    rune_cc: "",
    rune_mana: "",
    world_tree: "",
    hero: [],
    skill_em: "",
    skill_bd: "",
    skill_up: "",
    skill_in: "",
    skill_hl: "",
    skill_ms: "",
    skill_bs: "",
    note: "",
  });
  return (
    <div className="flex flex-col p-4">
      <div className="grid grid-cols-3">
        <UserInfo data={data} />
        <div className="col-span-2 pl-4">
          <h1 className="text-xl font-bold border-b-2 border-dashed">
            Thêm mới
          </h1>
          <FormAdd data={data} setData={setData} />
        </div>
      </div>
    </div>
  );
}

export default NewLogsPage;
