import React from "react";
import { BsDiscord } from "react-icons/bs";

function DiscordInvite() {
  return (
    <a href="https://discord.gg/PvYvzCXbrN" target="_blank"
      className="p-6 bg-blur-white backdrop-blur-md w-full 
    rounded-lg hover:scale-[1.02] duration-500 cursor-pointer
    flex items-center text-black"
    >
      <BsDiscord className="w-12 h-12" />
      <div className="flex flex-col ml-6">
        <h3 className="flex items-center gap-1">Checkcost's <p className="text-sky-600">Discord</p></h3>
        <p>Thông báo, Cộng đồng, Báo cáo Lỗi, Yêu cầu Tính năng, Hỗ trợ</p>
      </div>
    </a>
  );
}

export default DiscordInvite;
