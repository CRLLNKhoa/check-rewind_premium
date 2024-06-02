import { TLog } from "@/app/logs/new/page";
import { cn } from "@/lib/utils";
import React from "react";
import { GrUserAdd } from "react-icons/gr";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { common, rare, epic, legendary } from "@/json/choice";

function ChoiceTeam({
  team,
  data,
  setData,
}: {
  team: string[]; data: TLog
  setData: (state: TLog) => void;
}) {

    const handleChoice = (idhero:string) => {
        if (!team.includes(idhero)) {
          if (team.length > 5) {
            alert("Tối đa có 6 anh hùng !")
          } else {
            setData({...data, hero: [...team, idhero]});
          }
        } else setData({...data, hero: team.filter((item) => item !== idhero)});
      };
  return (
    <div className="flex flex-wrap items-center">
      <Dialog>
        <DialogTrigger asChild>
          <div className="border size-14 rounded-md relative cursor-pointer">
            <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <GrUserAdd className="text-green-600 text-xl" />
            </p>
          </div>
        </DialogTrigger>
        <DialogContent>
          <div className="flex flex-col gap-2">
            <h1>Trắng</h1>
            <div className="flex items-center flex-wrap gap-2">
                {common.map((item: number) => (
                  <img onClick={() => handleChoice(String(item))} src={`/hero/trang/${item}.png`} alt="hero" className="size-8 cursor-pointer" />
                ))}
            </div>
            <h1>Xanh</h1>
            <div className="flex items-center flex-wrap gap-2">
                {rare.map((item: number) => (
                  <img onClick={() => handleChoice(String(item))} src={`/hero/xanh/${item}.png`} alt="hero" className="size-8 cursor-pointer" />
                ))}
            </div>
            <h1>Tím</h1>
            <div className="flex items-center flex-wrap gap-2">
                {epic.map((item: number) => (
                  <img onClick={() => handleChoice(String(item))} src={`/hero/tim/${item}.png`} alt="hero" className="size-8 cursor-pointer" />
                ))}
            </div>
            <h1>Vàng</h1>
            <div className="flex items-center flex-wrap gap-2">
                {legendary.map((item: number) => (
                  <img onClick={() => handleChoice(String(item))} src={`/hero/vang/${item}.png`} alt="hero" className="size-8 cursor-pointer" />
                ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ChoiceTeam;
