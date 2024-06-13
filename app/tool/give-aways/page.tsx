"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { FcCheckmark } from "react-icons/fc";

function GiveAways() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleGive = () => {
    setIsSuccess(false)
    setIsLoading(true)
    setTimeout(() => {
        setIsSuccess(true)
        setIsLoading(false)
    }, 5000);
  }

  return (
    <main className="flex w-full flex-col py-6 items-center justify-center">
      <div className="w-full max-w-[1024px] flex flex-col gap-6 p-4">
        <div className="h-full bg-blur-white backdrop-blur-md p-4 rounded-lg flex flex-col">
          <h1 className="font-bold text-xl">Tặng ruby</h1>
          <div className="grid lg:grid-cols-2 mt-12 gap-x-8 gap-y-4">
            <div className="flex flex-col gap-2">
              <h1>Tên username: </h1>
              <Input placeholder="Tên người chơi" />
            </div>
            <div className="flex flex-col gap-2">
              <h1>Số lượng ruby: </h1>
              <Select>
                <SelectTrigger className="w-[220px]">
                  <SelectValue placeholder="Chọn quà" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="1,000">1,000 ruby</SelectItem>
                    <SelectItem value="2,000">2,000 ruby</SelectItem>
                    <SelectItem value="4,000">4,000 ruby</SelectItem>
                    <SelectItem value="6,000">6,000 ruby</SelectItem>
                    <SelectItem value="10,000">10,000 ruby</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center">
              {isLoading && (
                <div
                  className="border text-sky-600 flex items-center gap-4 w-full p-4 rounded-lg bg-white
               shadow-sm"
                >
                  <AiOutlineLoading3Quarters className="text-xl animate-spin" />
                  <p>Đang gửi quà ...</p>
                  <IoClose className="ml-auto text-xl" />
                </div>
              )}
              {isSuccess && (
                <div
                  className="border text-green-600 flex items-center gap-4 w-full p-4 rounded-lg bg-white
               shadow-sm"
                >
                  <FcCheckmark className="text-xl" />
                  <p>Đã gửi thành công gói quà !</p>
                  <IoClose className="ml-auto text-xl" />
                </div>
              )}
            </div>
            <div className="flex items-center justify-end">
              <Button onClick={handleGive}>
                {isLoading && <AiOutlineLoading3Quarters className="mr-2 animate-spin" />}
                {isLoading ? "Đang gửi..." : "Gửi quà"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default GiveAways;
