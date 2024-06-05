import { cn } from "@/lib/utils";
import React from "react";
import { FaStar } from "react-icons/fa";
import { Button } from "../ui/button";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover-log";
import { SlBookOpen } from "react-icons/sl";
import { LiaUserCircle } from "react-icons/lia";

function ItemLog({ lv_hero }: { lv_hero: number }) {
  return (
    <div className="bg-blur-white rounded-lg p-4 backdrop-blur-md flex items-center gap-4 select-none">
      <div className="rounded-lg relative">
        <img src="/hero/1.png" alt="hero_img" className="size-12 rounded-lg" />
        <div className="absolute flex items-center bg-black px-2 rounded-md text-xs left-1/2 -translate-x-1/2 -bottom-2">
          <p className="text-white font-bold mr-1"> {lv_hero}</p>
          <FaStar
            className={cn(
              "text-black",
              lv_hero > 0 && lv_hero < 6 && "text-yellow-500",
              lv_hero > 5 && lv_hero < 11 && "text-red-500",
              lv_hero > 10 && lv_hero < 16 && "text-white",
              lv_hero > 15 && lv_hero < 21 && "text-purple-500"
            )}
          />
        </div>
      </div>
      <div className="lg:flex hidden md:flex flex-col">
        <h2 className="font-bold">Lương Khoa</h2>
        <p className="text-sm">1 ngày trước</p>
      </div>
      <div className="flex items-center gap-2 ml-auto mr-auto">
        <h3 className="font-bold">DAY:</h3> 23,123
      </div>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            className="bg-transparent hover:bg-blur-black border-none"
            size={"icon"}
            variant={"ghost"}
          >
            <BsThreeDotsVertical className="text-xl" />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-2 flex flex-col">
            <div className="flex items-center hover:bg-sky-500 cursor-pointer duration-500 
            p-2 hover:text-white text-sm gap-2 rounded-md">
               <SlBookOpen /> Xem nhật ký
            </div>
            <div className="flex items-center hover:bg-sky-500 cursor-pointer duration-500 
            p-2 hover:text-white text-sm gap-2 rounded-md">
               <LiaUserCircle className="text-lg" /> Xem player
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default ItemLog;
