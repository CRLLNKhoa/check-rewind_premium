"use client"
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
import { TLog } from "@/types";
import monent from "moment"
import Link from "next/link";

function ItemLog({ log }: { log: TLog }) {
  return (
    <div className="bg-blur-white rounded-lg p-4 backdrop-blur-md flex items-center gap-4 select-none">
      <div className="rounded-lg relative">
        <img src={`/heroes/${log.team[0].avatar}`} alt="hero_img" className="size-12 rounded-lg" />
        <div className="absolute flex items-center bg-black px-2 rounded-md text-xs left-1/2 -translate-x-1/2 -bottom-2">
          <p className="text-white font-bold mr-1"> {log?.team[0].star}</p>
          <FaStar
            className={cn(
              "text-black",
              log?.team[0].star > 0 && log?.team[0].star < 6 && "text-yellow-500",
              log?.team[0].star > 5 && log?.team[0].star < 11 && "text-red-500",
              log?.team[0].star > 10 && log?.team[0].star < 16 && "text-white",
              log?.team[0].star > 15 &&
                log?.team[0].star < 21 &&
                "text-purple-500"
            )}
          />
        </div>
      </div>
      <div className="lg:flex hidden md:flex flex-col">
        <h2 className="font-bold">{log.username}</h2>
        <p className="text-sm">{monent(log.created_at).fromNow()}</p>
      </div>
      <div className="flex items-center gap-2 ml-auto mr-auto">
        <h3 className="font-bold">DAY:</h3> {log.current_day.toLocaleString()}
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
            <Link href={`/logs/${log.id}`}
              className="flex items-center hover:bg-sky-500 cursor-pointer duration-500 
            p-2 hover:text-white text-sm gap-2 rounded-md"
            >
              <SlBookOpen /> Xem nhật ký
            </Link>
            <Link href={`/stats/${log.username}`}
              className="flex items-center hover:bg-sky-500 cursor-pointer duration-500 
            p-2 hover:text-white text-sm gap-2 rounded-md"
            >
              <LiaUserCircle className="text-lg" /> Xem player
            </Link>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default ItemLog;
