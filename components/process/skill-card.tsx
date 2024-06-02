import React from "react";

function SkillCard({skill,lv}:{skill: string,lv: string}) {
  return (
    <div className="size-14 relative">
      <img src={`/skill/${skill}.webp`} alt="skill" />
      <p className="absolute  text-xs left-1/2 
      -translate-x-1/2 text-[#FF8000] -bottom-1 bg-black/90 rounded-sm px-1 font-bold">
        {lv}
      </p>
    </div>
  );
}

export default SkillCard;
