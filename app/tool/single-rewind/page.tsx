"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { IoClose, IoSearchCircleOutline } from "react-icons/io5";
import { RiRobot2Line } from "react-icons/ri";
import data from "@/jsons/new-single-rw.json";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";
import { PiSortAscendingBold } from "react-icons/pi";
import { PiSortDescendingBold } from "react-icons/pi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

interface DataEntry {
  day: number;
  skipp: number;
  ticket: number;
  cost: number;
  elixir_cost: number;
}

function SingleRewindPage() {
  const [result, setResult] = useState<DataEntry[]>([]);
  const [inputCurrent, setInputCurrent] = useState(0);
  const [inputPlaned, setInputPlaned] = useState(0);
  const [isSortDay, setIsSortDay] = useState(false);
  const [isSortCost, setIsSortCost] = useState(false);
  const [isSearchAI, setIsSearchAI] = useState(false);

  const handleSearch = () => {
    if (inputCurrent < 1000 || inputPlaned < 1000) {
      toast.error("Day phải trên 1000 !");
      return;
    }

    if (inputCurrent >= inputPlaned) {
      toast.error("Nhập cái gì thế ?");
      return;
    }
    setIsSearchAI(false);
    setResult(
      data.filter(
        (entry) => entry.day >= inputCurrent && entry.day <= inputPlaned
      )
    );
  };

  const handleSearchWithAI = () => {
    if (inputCurrent < 1000 || inputPlaned < 1000) {
      toast.error("Day phải trên 1000 !");
      return;
    }

    if (inputCurrent >= inputPlaned) {
      toast.error("Nhập cái gì thế ?");
      return;
    }
    setIsSearchAI(true);
    setResult(
      data.filter(
        (entry) => entry.day >= inputCurrent && entry.day <= inputPlaned
      )
    );
  };

  const handleSortDay = () => {
    if (isSortDay) {
      setResult(result.sort((a: DataEntry, b: DataEntry) => a.day - b.day));
      setIsSortDay(!isSortDay);
    } else {
      setResult(result.sort((a: DataEntry, b: DataEntry) => b.day - a.day));
      setIsSortDay(!isSortDay);
    }
  };

  const handleSortCost = () => {
    if (isSortCost) {
      setResult(result.sort((a: DataEntry, b: DataEntry) => a.cost - b.cost));
      setIsSortCost(!isSortCost);
    } else {
      setResult(result.sort((a: DataEntry, b: DataEntry) => b.cost - a.cost));
      setIsSortCost(!isSortCost);
    }
  };

  return (
    <main className="flex w-full flex-col py-6 items-center justify-center">
      <div className="w-full max-w-[1024px] flex flex-col gap-6 p-4">
        <div className="h-full bg-blur-white backdrop-blur-md p-4 rounded-lg flex flex-col">
          <h1 className="text-center font-bold text-xl">Single Rewind</h1>
          <p className="text-center">
            Giá trị của cost càng nhỏ thời gian rewind càng ngắn
          </p>
          <p className="text-center">Beta 1.0.0</p>
          <div className="grid grid-cols-2 mt-8 gap-6 lg:px-28">
            <div className="flex flex-col">
              <h2 className="font-semibold mb-1">Ngày hiện tại</h2>
              <Input
                value={inputCurrent}
                onChange={(e) => setInputCurrent(Number(e.target.value))}
                type="number"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="font-semibold mb-1 text-end">Ngày dự kiến</h2>
              <Input
                value={inputPlaned}
                onChange={(e) => setInputPlaned(Number(e.target.value))}
                type="number"
                className="text-end"
              />
            </div>
          </div>
          <h2 className="text-center mt-4">Chọn nhanh</h2>
          <div className="flex items-center justify-center gap-4 mt-2">
            <Button
              onClick={() => setInputPlaned(inputCurrent + 100)}
              className=""
              size={"sm"}
            >
              +100
            </Button>
            <Button
              onClick={() => setInputPlaned(inputCurrent + 300)}
              className=""
              size={"sm"}
            >
              +300
            </Button>
            <Button
              onClick={() => setInputPlaned(inputCurrent + 500)}
              className=""
              size={"sm"}
            >
              +500
            </Button>
          </div>
          <div className="flex items-center justify-center mt-4 gap-4">
            <Button
              onClick={handleSearch}
              className="w-1/2 max-w-[200px] flex items-center justify-center"
            >
              <IoSearchCircleOutline className="w-6 h-6 mr-2" /> Tra cứu
            </Button>
            <Button
              onClick={handleSearchWithAI}
              className="w-1/2 max-w-[200px] flex items-center justify-center"
            >
              <RiRobot2Line className="w-5 h-5 mr-2" />
              Tra cứu với AI
            </Button>
          </div>
          {!isSearchAI && (
            <div className="flex flex-col mt-8 bg-blur-white backdrop-blur-md rounded-lg">
              <div className="grid grid-cols-4 bg-black backdrop-blur-md p-2 rounded-t-lg">
                <h1
                  onClick={handleSortDay}
                  className="cursor-pointer font-bold text-white flex items-center justify-center gap-1"
                >
                  DAY
                  {!isSortDay ? (
                    <PiSortAscendingBold className="w-4 h-4" />
                  ) : (
                    <PiSortDescendingBold className="w-4 h-4" />
                  )}
                </h1>
                <h1 className="text-center font-bold text-white">SKIP</h1>
                <h1 className="text-center font-bold text-white">TICKETS</h1>
                <h1
                  onClick={handleSortCost}
                  className="cursor-pointer font-bold text-white flex items-center justify-center gap-1"
                >
                  COST
                  {!isSortCost ? (
                    <PiSortAscendingBold className="w-4 h-4" />
                  ) : (
                    <PiSortDescendingBold className="w-4 h-4" />
                  )}
                </h1>
              </div>
              {result.map((item: DataEntry) => (
                <div
                  className={cn(
                    "grid grid-cols-4 backdrop-blur-md p-2 text-white",
                    item.cost > 161 &&
                      item.cost < 184 &&
                      "bg-[#7CFC00]/70 text-black",
                    item.cost > 184 &&
                      item.cost < 207 &&
                      "bg-[#00FF00]/70 text-black",
                    item.cost > 207 && item.cost < 230 && "bg-[#008000]/70",
                    item.cost > 230 &&
                      item.cost < 253 &&
                      "bg-[#FFD700]/70 text-black",
                    item.cost > 253 && item.cost < 276 && "bg-[#FFA500]/70",
                    item.cost > 276 && item.cost < 299 && "bg-[#FF8C00]/70",
                    item.cost > 299 && item.cost < 322 && "bg-[#FF6347]/70",
                    item.cost > 322 && item.cost < 345 && "bg-[#FF0000]/70",
                    item.cost > 345 && item.cost < 368 && "bg-[#DC143C]/70",
                    item.cost > 368 && item.cost < 385 && "bg-[#8B0000]/70"
                  )}
                >
                  <h1 className="text-center font-bold ">{item.day}</h1>
                  <h1 className="text-center font-bold">{item.skipp}</h1>
                  <h1 className="text-center font-bold">
                    {Math.ceil(item.ticket)}
                  </h1>
                  <h1 className="text-center font-bold">
                    {Math.ceil(item.cost)}
                  </h1>
                </div>
              ))}
            </div>
          )}
          {/* NOTE AI */}
          {
            <div className="flex flex-col mt-12 gap-4">
              <div
                className="border text-sky-600 flex items-center gap-4 w-full p-4 rounded-lg bg-white
               shadow-sm"
              >
                <AiOutlineLoading3Quarters className="text-xl animate-spin" />
                <p>Đang xử lý dữ liệu ...</p>
                <IoClose className="ml-auto text-xl" />
              </div>

              <div
                className="border text-green-600 flex flex-col gap-4 w-full p-4 rounded-lg bg-white
               shadow-sm"
              >
               <div className="flex items-center justify-between w-full">
                  <IoMdCheckmarkCircleOutline className="text-xl animate-spin mr-4" />
                  <p>Phân tích thông tin thành công !</p>
                  <IoClose className="ml-auto text-xl" />
               </div>
               <div className="flex flex-col">
                  <p>Day hoàn hảo để rewind:</p>
               </div>
              </div>
            </div>
          }

          {/* NOTE Lenght = 0 */}
          {result.length === 0 && (
            <div className="min-h-[320px] flex items-center justify-center">
              <h1 className="font-bold">Nhập day cần tìm kiếm !</h1>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default SingleRewindPage;
