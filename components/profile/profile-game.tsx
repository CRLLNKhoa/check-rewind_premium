"use client";
import React, { useState } from "react";
import SelectTeam, { THero } from "../layouts/select-team";
import Skills from "./skills";
import Runes from "./runes";
import Days from "./days";
import WorldTree from "./world-tree";
import { useUserStore } from "@/store/user";
import { updateStat } from "@/action/users";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";

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

function ProfileGame() {
  const user = useUserStore((state: any) => state.user);
  const updateUser = useUserStore((state: any) => state.updateUser);

  const [tree, setTree] = useState(user?.world_tree);

  const [days, setDays] = useState(user?.day);

  const [team, setTeam] = useState<THero[]>(
    user?.team || [
      { index: 0, name: "Saul", star: 10, avatar: "Saul.webp" },
      { index: 1, name: "", star: 10, avatar: "" },
      { index: 2, name: "", star: 10, avatar: "" },
      { index: 3, name: "", star: 10, avatar: "" },
      { index: 4, name: "", star: 10, avatar: "" },
      { index: 5, name: "", star: 10, avatar: "" },
    ]
  );

  const [skills, setSkills] = useState(
    user?.skills || {
      em: "",
      bd: "",
      up: "",
      in: "",
      hl: "",
      ms: "",
      bs: "",
    }
  );

  const [runes, setRunes] = useState(
    user?.runes || {
      crit: "",
      dame: "",
      hero: "",
      heal: "",
      cc: "",
      mana: "",
    }
  );

  const [isLoading, setIsLoading] = useState(false);

  const handleUpdate = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const result = await updateStat({
      day: days,
      runes,
      skills,
      team,
      world_tree: tree,
    });
    if (result?.status === 200) {
      updateUser({ ...user, day: days, runes, skills, team, world_tree: tree });
      toast.success("Cập nhật thành công !");
      setIsLoading(false);
    } else setIsLoading(false);
  };
  return (
    <div className=" p-4 rounded-lg">
      <form onSubmit={handleUpdate} className="flex flex-col  gap-4">
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
        <button
          disabled={isLoading}
          type="submit"
          className={cn(
            "bg-sky-600 p-4 text-white rounded-lg",
            isLoading && "bg-red-500"
          )}
        >
          {isLoading ? "Đang xử lý..." : "Lưu thông tin"}
        </button>
      </form>
    </div>
  );
}

export default ProfileGame;
