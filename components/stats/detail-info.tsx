import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function DetailInfo({
  avatar,
  day,
  exp,
}: {
  avatar: string;
  day: number;
  exp: number;
}) {
  return (
    <div className="bg-blur-white backdrop-blur-md p-4 flex items-center">
      <Avatar className="size-20">
        <AvatarImage src={avatar} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col ml-6 w-full">
        <div className="flex items-center gap-2">
          <p>Day {day}</p>
          <p>-</p>
          <p>Level {Math.floor(exp / 100)}</p>
        </div>
        <div className="bg-gray-400 w-full max-w-lg h-4 rounded-full relative overflow-hidden">
          <div className="absoulte top-0 left-0 bottom-0 w-1/2 h-full bg-sky-600"></div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-white">
            {Math.floor(exp %  100)}/100 XP
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailInfo;
