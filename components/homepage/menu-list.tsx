import Link from "next/link";
import React from "react";

function MenuList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-blur-white backdrop-blur-md duration-500 p-4 rounded-lg cursor-pointer flex items-center">
        <div className="flex flex-col">
          <h2 className="font-bold text-lg text-sky-600">Công cụ phổ biến</h2>
          <p className="text-sm line-clamp-1">Rewind nhận dầu, unleash rune.</p>
        </div>
      </div>

      <div
        className="bg-blur-white backdrop-blur-md hover:scale-[1.02] duration-500 p-4 rounded-lg 
      cursor-pointer flex flex-col gap-6"
      >
        <Link href="/tool/single-rewind" className="flex items-center group">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 size-12 rounded-md mr-4 text-white flex 
          items-center justify-center text-xs"></div>
          <div className="flex flex-col">
            <h2 className="font-bold group-hover:text-sky-600 duration-300">Single Rewind</h2>
            <p className="text-sm line-clamp-1">
              Rewind nhận dầu, unleash rune.
            </p>
          </div>
        </Link>
        
        <Link href="/tool/double-rewind" className="flex items-center group">
          <div className="bg-gradient-to-r from-violet-400 to-purple-300 size-12 rounded-md mr-4 text-white flex 
          items-center justify-center text-xs"></div>
          <div className="flex flex-col">
            <h2 className="font-bold group-hover:text-sky-600 duration-300">Double Rewind</h2>
            <p className="text-sm line-clamp-1">
              Rewind nhận vé.
            </p>
          </div>
        </Link>

        <Link href="/tool/time-rewind" className="flex items-center group">
          <div className="bg-gradient-to-r from-indigo-400 to-cyan-400 size-12 rounded-md mr-4 text-white flex 
          items-center justify-center text-xs"></div>
          <div className="flex flex-col">
            <h2 className="font-bold group-hover:text-sky-600 duration-300">Time Rewind</h2>
            <p className="text-sm line-clamp-1">
              Thời gian cụ thể 1 số mốc thời gian.
            </p>
          </div>
        </Link>

        <Link href="/tool/time-rewind" className="flex items-center group">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 size-12 rounded-md mr-4 text-white flex 
          items-center justify-center text-xs"></div>
          <div className="flex flex-col">
            <h2 className="font-bold group-hover:text-sky-600 duration-300">Time Nightmare</h2>
            <p className="text-sm line-clamp-1">
              Thời gian cụ thể 1 số mốc thời gian.
            </p>
          </div>
        </Link>

        <Link href="/tool/calculator" className="flex items-center group">
          <div className="bg-gradient-to-r from-lime-400 to-lime-500 size-12 rounded-md mr-4 text-white flex 
          items-center justify-center text-xs"></div>
          <div className="flex flex-col">
            <h2 className="font-bold group-hover:text-sky-600 duration-300">Tính Toán Game</h2>
            <p className="text-sm line-clamp-1">
              Tính dầu, vũ khí, skill...
            </p>
          </div>
        </Link>

      </div>

    </div>
  );
}

export default MenuList;
