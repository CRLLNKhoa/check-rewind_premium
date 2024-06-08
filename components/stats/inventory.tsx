"use client";
import React from "react";
import { Tooltip } from "react-tooltip";

function Inventory({ ruby, medal }: { ruby: number; medal: any }) {
  return (
    <div className="bg-blur-white backdrop-blur-md p-4 flex flex-col gap-4">
      <h1 className="flex items-center font-bold text-xl">Inventory</h1>
      <div className="grid grid-cols-4 md:grid-cols-9 lg:grid-cols-9 gap-2">
        <div className="bg-blur-white medal-ruby cursor-pointer relative p-2 h-[78px] select-none rounded-lg flex items-center justify-center">
          <img src="/ruby.webp" alt="img" className="w-1/2" />
          <p className="absolute bottom-2 right-2 text-lg text-white [text-shadow:_0_3px_2px_rgb(0_0_0_/_80%)]">
            {ruby}
          </p>
          <Tooltip anchorSelect=".medal-ruby" place="top">
            Vật phẩm ruby tích đủ 10K có thể nhận quà !
          </Tooltip>
        </div>
        <div className="bg-blur-white medal-chicken cursor-pointer relative p-2 h-[78px] select-none rounded-lg flex items-center justify-center">
          <img src="/chicken.png" alt="img" className="w-1/2" />
          <p className="absolute bottom-2 right-2 text-lg text-white [text-shadow:_0_3px_2px_rgb(0_0_0_/_80%)]">
            01
          </p>
          <Tooltip anchorSelect=".medal-chicken" place="top">
            Huy Hiệu Gà Con
          </Tooltip>
        </div>
        <div className="bg-blur-white cursor-pointer medal-apple relative p-2 h-[78px] select-none rounded-lg flex items-center justify-center">
          <img src="/apple.webp" alt="img" className="w-1/2" />
          <p className="absolute bottom-2 right-2 text-lg text-white [text-shadow:_0_3px_2px_rgb(0_0_0_/_80%)]">
            {medal.wt && "01"}
          </p>
          <Tooltip anchorSelect=".medal-apple" place="top">
            Huy Hiệu Táo Dai
          </Tooltip>
        </div>
        <div className="bg-blur-white cursor-pointer medal-void relative p-2 h-[78px] select-none rounded-lg flex items-center justify-center">
          <img src="/void.png" alt="img" className="w-1/2" />
          <p className="absolute bottom-2 right-2 text-lg text-white [text-shadow:_0_3px_2px_rgb(0_0_0_/_80%)]">
            {medal.void && "01"}
          </p>
          <Tooltip anchorSelect=".medal-void" place="top">
            Huy Hiệu Con Voi
          </Tooltip>
        </div>
        <div className="bg-blur-white p-2 h-[78px] rounded-lg"></div>
        <div className="bg-blur-white p-2 h-[78px] rounded-lg"></div>
        <div className="bg-blur-white p-2 h-[78px] rounded-lg"></div>
        <div className="bg-blur-white p-2 h-[78px] rounded-lg"></div>
      </div>
    </div>
  );
}

export default Inventory;
