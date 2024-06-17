"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { IoClose, IoSearchCircleOutline } from "react-icons/io5";
import { RiRobot2Line } from "react-icons/ri";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";
import { PiSortAscendingBold } from "react-icons/pi";
import { PiSortDescendingBold } from "react-icons/pi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import data from "@/json/time.json";
import { CiCalendarDate, CiTimer } from "react-icons/ci";
type DataItem = {
  day: string;
  time: string;
};

function DoubleRewindPage() {
  const [result, setResult] = useState<DataItem[]>([]);
  const [inputCurrent, setInputCurrent] = useState(0);
  const [inputPlaned, setInputPlaned] = useState(0);
  const [isSortDay, setIsSortDay] = useState(false);
  const [isSortCost, setIsSortCost] = useState(false);
  const [isSearchAI, setIsSearchAI] = useState(false);
  const [resultAI, setResultAI] = useState<any>();
  const [isLoadingAI, setIsLoadingAI] = useState<boolean>();

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
        (entry) =>
          Number(entry.day) >= inputCurrent && Number(entry.day) <= inputPlaned
      )
    );
  };

  console.log(result);

  const handleSortDay = () => {
    if (isSortDay) {
      setResult(
        result.sort((a: DataItem, b: DataItem) => Number(a.day) - Number(b.day))
      );
      setIsSortDay(!isSortDay);
    } else {
      setResult(
        result.sort((a: DataItem, b: DataItem) => Number(b.day) - Number(a.day))
      );
      setIsSortDay(!isSortDay);
    }
  };

  return (
    <main className="flex w-full flex-col py-6 items-center justify-center">
      <div className="w-full max-w-[1024px] flex flex-col gap-6 p-4">
        <div className="h-full bg-blur-white backdrop-blur-md p-4 rounded-lg flex flex-col">
          <h1 className="text-center font-bold text-xl">Time Rewind</h1>
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
              className="w-1/2 max-w-[320px] flex items-center justify-center"
            >
              <IoSearchCircleOutline className="w-6 h-6 mr-2" /> Tra cứu
            </Button>
          </div>

          <div className="grid lg:grid-cols-4 gap-2 mt-8">
            {result.map((item:DataItem) => (
                <div className="flex items-center bg-sky-600 p-4 rounded-lg justify-between backdrop-blur-md text-white">
                <div className="flex items-center gap-2">
                  <CiCalendarDate className="w-6 h-6" />
                  <p>{item.day}</p>
                </div>
                <p>-</p>
                <div className="flex items-center gap-2">
                  <CiTimer className="w-5 h-5"/>
                  <p>{item.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* NOTE Lenght = 0 */}
          {result.length === 0 && !isSearchAI && (
            <div className="min-h-[320px] flex items-center justify-center">
              <h1 className="font-bold">Nhập day cần tìm kiếm !</h1>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default DoubleRewindPage;
