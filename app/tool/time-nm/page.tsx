"use client";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { FiCheckCircle } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import data from "@/jsons/time-nm.json";
import { GoDotFill } from "react-icons/go";
import { IoMdTime } from "react-icons/io";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import toast from "react-hot-toast";

interface DayObject {
  day: number;
  time: string;
}

function TimeNMPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [input, setInput] = useState(12100);
  const [result, setResult] = useState<DayObject[]>([]);

  const handleGive = (e: any) => {
    e.preventDefault();
    if (input < 12000 || input > 36000) {
      toast.error("Nhập day từ 12k - 36k");
      return;
    }
    setIsSuccess(false);
    setIsLoading(true);
    setTimeout(() => {
      setIsSuccess(true);
      setIsLoading(false);
    }, 3000);
    // Sắp xếp mảng theo giá trị day
    data.sort((a, b) => a.day - b.day);

    // Tìm index của phần tử gần nhất
    let closestIndex = data.findIndex((item) => item.day >= input);
    if (closestIndex === -1) {
      closestIndex = data.length - 1;
    }

    if (
      closestIndex > 0 &&
      (closestIndex === data.length ||
        Math.abs(data[closestIndex].day - input) >=
          Math.abs(data[closestIndex - 1].day - input))
    ) {
      closestIndex--;
    }

    // Lấy các item gần nhất và 1 item trước và sau
    const result: DayObject[] = [];
    for (let i = closestIndex - 1; i <= closestIndex + 1; i++) {
      if (i >= 0 && i < data.length) {
        result.push(data[i]);
      }
    }

    // Sắp xếp kết quả theo day
    result.sort((a, b) => a.day - b.day);

    setResult(result);
  };
  return (
    <main className="flex w-full flex-col py-6 items-center justify-center">
      <div className="w-full max-w-[1024px] flex flex-col gap-6 p-4">
        <div className="h-full bg-blur-white backdrop-blur-md p-4 rounded-lg flex flex-col">
          <h1 className="text-center font-bold text-xl uppercase">
            Thời gian nightmare
          </h1>
          <p className="text-center">Beta 1.0.0</p>
          <h3 className="text-center font-semibold mt-6">
            Nhập day bạn muốn tìm
          </h3>
          <form onSubmit={handleGive} className="flex flex-col">
            <Input
              pattern="^(12[0-9]{3}|1[3-9][0-9]{3}|2[0-9]{4}|3[0-5][0-9]{3}|36000)$"
              required
              value={input}
              onChange={(e) => setInput(Number(e.target.value))}
              className="mx-auto w-[320px] mt-2 text-center"
              type="number"
              placeholder="Enter day..."
            />
            <Button
              disabled={isLoading}
              type="submit"
              className="w-[120px] mx-auto mt-4"
            >
              Search
            </Button>
          </form>
          <div className="flex items-center mt-4">
            {isLoading && (
              <div
                className="border text-sky-600 flex items-center gap-4 w-full p-4 rounded-lg bg-white
               shadow-sm"
              >
                <AiOutlineLoading3Quarters className="text-xl animate-spin" />
                <p>Đang tính toán ...</p>
                <IoClose className="ml-auto text-xl" />
              </div>
            )}
            {isSuccess && (
              <div
                className="border text-green-600 flex flex-col gap-4 w-full p-4 rounded-lg bg-white
               shadow-sm"
              >
                <div className="flex items-center">
                  <FiCheckCircle className="text-xl mr-4" />
                  <p>Kết quả:</p>
                </div>
                <div className="flex flex-col text-sky-600">
                  <ul>
                    {result.map((item: DayObject) => (
                      <li className="flex items-center gap-2">
                        <GoDotFill />
                        <HiOutlineCalendarDays /> Day: {item.day} - <IoMdTime />{" "}
                        Time: {item.time}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default TimeNMPage;
