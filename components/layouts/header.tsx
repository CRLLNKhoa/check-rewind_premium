"use client";
import React from "react";
import Logo from "./logo";
import { cn } from "@/lib/utils";
import { useSettingStore } from "@/store/setting";
import { Button } from "../ui/button";
import { RiNotification3Line } from "react-icons/ri";
import AvatarMenu from "./avatar-menu";
import { useRouter } from "next/navigation";
import SearchPlayer from "./search-player";

function Header() {
  const headerChoice = useSettingStore((state: any) => state.headerFixed);
  const router = useRouter() 

  return (
    <header
      className={cn(
        "h-[56px] flex items-center justify-between bg-blur-white px-4 shadow-sm border-border",
        headerChoice === "sticky" && "sticky top-0 left-0 right-0"
      )}
    >
      <Logo />
      <SearchPlayer />
      <div className="flex items-center gap-4">
        <Button onClick={() => router.push("/logs/new")} size={"sm"}>
          Thêm nhật ký
        </Button>
        <Button variant={"ghost"} size={"sm"}>
        <RiNotification3Line onClick={() => router.push("/notifications")} className="w-6 h-6" />
        </Button>
        <AvatarMenu />
      </div>
    </header>
  );
}

export default Header;
