import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function DetailInfo() {
  return (
    <div className="bg-blur-white backdrop-blur-md p-4 flex items-center">
      <Avatar className="size-20">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col ml-6 w-full">
        <p>Level 74</p>
        <div className="bg-gray-400 w-full max-w-lg h-4 rounded-full relative overflow-hidden">
            <div className="absoulte top-0 left-0 bottom-0 w-1/2 h-full bg-sky-600"></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-white">96/100 XP</div>
        </div>
      </div>
    </div>
  );
}

export default DetailInfo;
