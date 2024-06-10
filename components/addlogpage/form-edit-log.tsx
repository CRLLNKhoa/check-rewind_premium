"use client";
import React, { useEffect, useState } from "react";
import SelectTeam, { THero } from "../layouts/select-team";
import Days from "../profile/days";
import Skills from "../profile/skills";
import Runes from "../profile/runes";
import WorldTree from "../profile/world-tree";
import { addLog, getDetailLog, updateLog } from "@/action/logs";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useUserStore } from "@/store/user";

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
  prevDay?: number;
  currDay?: number;
};
function EditNewLog() {
  const params = useParams()
  const searchParams = useSearchParams()
  const searchId = searchParams.get("user_id")
  const [id,setId] = useState("")
  const [tree, setTree] = useState("");
  const [note, setNote] = useState("");
  const [days, setDays] = useState(0);
  const [team, setTeam] = useState<THero[]>([
    { index: 0, name: "", star: 0, avatar: "" },
    { index: 1, name: "", star: 0, avatar: "" },
    { index: 2, name: "", star: 0, avatar: "" },
    { index: 3, name: "", star: 0, avatar: "" },
    { index: 4, name: "", star: 0, avatar: "" },
    { index: 5, name: "", star: 0, avatar: "" },
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

  useEffect(() => {
    const get = async () => {
      const result = await getDetailLog(Number(params.id))
      console.log(result)
      if(result?.status === 200){
        const {current_day,world_tree, team, skills,runes,note,user_id} = result.data[0]
        setDays(current_day)
        setTeam(team)
        setTree(world_tree)
        setSkills(skills)
        setRunes(runes)
        setId(user_id)
        setNote(note)
      }
    }
    get()
  }, [])
  
  const router = useRouter()
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if(id !== searchId){
      toast.error("Bạn không có quyền !")
      return;
    }
    const result  = await updateLog(Number(params.id),{
      runes,
      team,
      skills,
      note,
      world_tree: tree,
      current_day: Number(days),
    })
    if(result?.status === 200){
      toast.success("Cập nhật thành công !")
      router.push("/dashboard")
    }
  };

  const handleResetForm = () => {
    setRunes({
      crit: "",
      dame: "",
      hero: "",
      heal: "",
      cc: "",
      mana: "",
    })
    setSkills({
      em: "",
      bd: "",
      up: "",
      in: "",
      hl: "",
      ms: "",
      bs: "",
    })
    setTeam([
      { index: 0, name: "", star: 0, avatar: "" },
      { index: 1, name: "", star: 0, avatar: "" },
      { index: 2, name: "", star: 0, avatar: "" },
      { index: 3, name: "", star: 0, avatar: "" },
      { index: 4, name: "", star: 0, avatar: "" },
      { index: 5, name: "", star: 0, avatar: "" },
    ])
    setDays(0)
    setTree("")
    toast.success("Tạo mới form thành công !")
  }

  console.log(id,params.id)

  return (
    <div className=" p-4 rounded-lg">
      <form onSubmit={handleSubmit} className="flex flex-col  gap-4">
        <div className="flex items-center gap-4 justify-end flex-wrap">
          <h1 className="text-3xl mr-auto font-bold">Chỉnh sữa</h1>
          <Button type="button" onClick={handleResetForm}>Reset form</Button>
        </div>
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
        <h1 className="text-xl">Ghi chú</h1>
        <textarea
          name="notes"
          id="notes"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="h-[120px] rounded-lg outline-none p-4 resize-none"
          placeholder="Ghi chú ..."
        ></textarea>
        <button type="submit" className="bg-sky-600 p-4 text-white rounded-lg">
          Lưu thông tin
        </button>
      </form>
    </div>
  );
}

export default EditNewLog;
