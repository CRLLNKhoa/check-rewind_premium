"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

function SearchPlayer() {
  const [player, setPlayer] = useState("");
  const router = useRouter()
  return (
    <div
      className="w-[420px] px-4 py-1 rounded-full border border-border dark:border-white/20
    flex items-center"
    >
      <input value={player} onChange={(e) => setPlayer(e.target.value)} type="text" className="flex-1 bg-transparent outline-none
      text-black border-r mr-2 pl-2" placeholder="Nhập username..." />
      <button onClick={() => router.push(`/player/${player}`)} disabled={player.length === 0}
        className="pl-2 h-full group cursor-pointer"
      >
        <FiSearch className="group-hover:text-sky-500 duration-500 font-bold" />
      </button>
    </div>
  );
}

export default SearchPlayer;
