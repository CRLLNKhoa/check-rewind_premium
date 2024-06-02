import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import WtCard from "./wt-card";
import HeroCard from "./hero-card";
import SkillCard from "./skill-card";
import { TLog } from "@/app/logs/new/page";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function UserInfo({ data }: { data: TLog }) {
  return (
    <div
      className="bg-[#D27D2C] p-2 rounded-lg border-x-2 border-x-black/40 
    border-b-4 border-b-[#804B1B] border-t-4 border-t-[#F2B780]"
    >
      <h2 className="text-white font-bold text-lg select-none">User Info</h2>
      <div className="rounded-lg flex flex-col border-t-[6px] border-t-[#AC6647] border-x-[8px] border-[#3E251A] border-b-4 border-b-[#AD6747] bg-[#8A5238]">
        {/* NOTE Info */}
        <div
          className="w-full bg-[#4F3021] shadow-xl
            border-b-4 rounded-es-lg rounded-ee-lg border-[#000000] p-1 flex items-center"
        >
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col ml-4 flex-1">
            <h2 className="text-white font-semibold">IkusToruk</h2>
            <div className="flex items-center flex-1 justify-between">
              <h2 className="text-[#FFBD00] font-bold">
                DAY {data.day.toLocaleString()}
              </h2>
              <div className="flex items-center text-white text-xs gap-1">
                <p className="text-yellow-300">
                  {data.rewind.toLocaleString()}
                </p>{" "}
                <p>Rewinds</p>
              </div>
            </div>
          </div>
        </div>
        {/* NOTE Weapons Rune World Tree */}
        <div className="flex flex-col p-4">
          <div className="flex items-center gap-2 select-none relative cursor-pointer text-white">
            <p className="font-bold uppercase">Weapons</p>
            <p className="text-[#FFBD00] font-bold">
              {data.weapon.toLocaleString()}
            </p>
          </div>
          <h1 className="text-white font-bold uppercase text-md mb-2 mt-6">
            Runes (LV/Unleash)
          </h1>
          <div className="flex items-center justify-between gap-4 select-none">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="relative cursor-pointer">
                    <img
                      src="/runes/crit.webp"
                      alt="runes"
                      className="size-8"
                    />
                    <p
                      className="absolute -bottom-3 left-1/2 -translate-x-1/2 font-bold 
                  drop-shadow-lg text-purple-500 bg-white/80 text-xs px-2 rounded-sm uppercase"
                    >
                      {data.rune_crit.trim().split("-")[0]}
                    </p>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Level Unleash: {data.rune_crit.trim().split("-")[1]}</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="relative cursor-pointer">
                    <img
                      src="/runes/dame.webp"
                      alt="runes"
                      className="size-8"
                    />
                    <p
                      className="absolute -bottom-3 left-1/2 -translate-x-1/2 font-bold 
                  drop-shadow-lg text-purple-500 bg-white/80 text-xs px-2 rounded-sm uppercase"
                    >
                      {data.rune_dame.trim().split("-")[0]}
                    </p>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Level Unleash: {data.rune_dame.trim().split("-")[1]}</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="relative cursor-pointer">
                    <img
                      src="/runes/hero.webp"
                      alt="runes"
                      className="size-8"
                    />
                    <p
                      className="absolute -bottom-3 left-1/2 -translate-x-1/2 font-bold 
                  drop-shadow-lg text-purple-500 bg-white/80 text-xs px-2 rounded-sm uppercase"
                    >
                      {data.rune_hero.trim().split("-")[0]}
                    </p>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Level Unleash: {data.rune_hero.trim().split("-")[1]}</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="relative cursor-pointer">
                    <img
                      src="/runes/heal.webp"
                      alt="runes"
                      className="size-8"
                    />
                    <p
                      className="absolute -bottom-3 left-1/2 -translate-x-1/2 font-bold 
                  drop-shadow-lg text-purple-500 bg-white/80 text-xs px-2 rounded-sm uppercase"
                    >
                      {data.rune_heal.trim().split("-")[0]}
                    </p>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Không unleash được !</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="relative cursor-pointer">
                    <img src="/runes/cc.webp" alt="runes" className="size-8" />
                    <p
                      className="absolute -bottom-3 left-1/2 -translate-x-1/2 font-bold 
                  drop-shadow-lg text-purple-500 bg-white/80 text-xs px-2 rounded-sm uppercase"
                    >
                      {data.rune_cc.trim().split("-")[0]}
                    </p>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Không unleash được !</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="relative cursor-pointer">
                    <img src="/runes/mana.webp" alt="runes" className="size-8" />
                    <p
                      className="absolute -bottom-3 left-1/2 -translate-x-1/2 font-bold 
                  drop-shadow-lg text-purple-500 bg-white/80 text-xs px-2 rounded-sm uppercase"
                    >
                      {data.rune_mana.trim().split("-")[0]}
                    </p>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Không unleash được !</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <h1 className="text-white font-bold uppercase text-md mb-2 mt-12">
            World Tree
          </h1>
          <div className="flex items-center gap-2 flex-wrap">
            {data.world_tree
              .trim()
              .split(" ")
              .map((item: string) => (
                <WtCard key={item} text={item} />
              ))}
            {data.world_tree === "" && (
              <p className="text-white">- Chưa mở khóa !</p>
            )}
          </div>
          <h1 className="text-white font-bold uppercase text-end text-md mb-2 mt-6">
            Heroes
          </h1>
          <div className="flex items-center gap-2">
            <HeroCard id_hero={1} lv_hero={13} />
            <HeroCard id_hero={2} lv_hero={3} />
            <HeroCard id_hero={3} lv_hero={18} />
            <HeroCard id_hero={4} lv_hero={9} />
            <HeroCard id_hero={5} lv_hero={13} />
            <HeroCard id_hero={6} lv_hero={13} />
          </div>
          <h1 className="text-white font-bold uppercase text-center text-md mb-2 mt-6">
            Skills
          </h1>
          <div className="flex items-center gap-6 flex-wrap justify-center select-none">
            <SkillCard skill="em" lv={data.skill_em} />
            <SkillCard skill="bd" lv={data.skill_bd} />
            <SkillCard skill="up" lv={data.skill_up} />
            <SkillCard skill="in" lv={data.skill_in} />
            <SkillCard skill="hl" lv={data.skill_hl} />
            <SkillCard skill="ms" lv={data.skill_ms} />
            <SkillCard skill="bs" lv={data.skill_bs} />
          </div>
          <h1 className="text-white font-bold uppercase text-center text-md mb-2 mt-6">
            NOTE
          </h1>
          <p className="text-white text-sm text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
            itaque nam rerum quibusdam placeat non magni in ipsam.
            Exercitationem quae quos alias molestiae hic voluptas adipisci iusto
            assumenda incidunt eveniet.
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
