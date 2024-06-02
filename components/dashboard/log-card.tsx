import React from "react";
import { Button } from "../ui/button";
import { RiHeart2Line } from "react-icons/ri";
import { BsChatSquareText } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";

function LogCard() {
  return (
    <div className="border border-border dark:border-white/20 rounded-md p-4 flex justify-between items-center">
      <h2 className="font-bold text-sky-600">Day: 23,425</h2>
      <div className="items-center text-sm hidden lg:flex gap-4">
        <div className="flex items-center gap-1">
          <RiHeart2Line className="text-lg" />
          <p>12</p>
        </div>
        <div className="flex items-center gap-1">
          <BsChatSquareText className="text-md" />
          <p>12</p>
        </div>
        <div className="flex items-center gap-1">
          <FaRegEye className="text-md" />
          <p>12</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
      <Button
          variant={"outline"}
          size={"sm"}
          className="text-xs h-6 hidden lg:block"
        >
          Xem
        </Button>
        <Button
          variant={"outline"}
          size={"sm"}
          className="text-xs h-6"
        >
          Chỉnh sửa
        </Button>
        <Button variant={"destructive"} size={"sm"} className="text-xs h-6">
          Xóa
        </Button>
      </div>
    </div>
  );
}

export default LogCard;
