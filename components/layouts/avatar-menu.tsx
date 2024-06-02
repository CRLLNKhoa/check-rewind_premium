import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { PiFolderSimpleDashedThin } from "react-icons/pi";
import { CiBookmark } from "react-icons/ci";
import { PiUserListLight } from "react-icons/pi";
import { CiLogout } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";

function AvatarMenu() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col py-4 text-sm">
        <Link href={"/dashboard"} className="flex items-center gap-2 hover:bg-secondary p-2 px-4">
            <PiFolderSimpleDashedThin className="w-5 h-5" /> Dashboard
          </Link>
          <Link href={"/settings"} className="flex items-center gap-2 hover:bg-secondary p-2 px-4">
            <CiBookmark className="w-5 h-5" /> Nhật ký đã lưu
          </Link>
          <Link href={"/settings"} className="flex items-center gap-2 hover:bg-secondary p-2 px-4">
            <PiUserListLight className="w-5 h-5" /> Theo dõi
          </Link>
          <Link href={"/settings"} className="flex items-center gap-2 hover:bg-secondary p-2 px-4">
            <CiSettings className="w-5 h-5" /> Settings
          </Link>
          <Link href={"/settings"} className="flex items-center gap-2 hover:bg-secondary p-2 px-4">
            <CiLogout className="w-5 h-5" /> Đăng xuất
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default AvatarMenu;
