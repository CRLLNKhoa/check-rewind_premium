"use client";
import { getUserStat } from "@/action/users";
import { cn } from "@/lib/utils";
import { useUserStore } from "@/store/user";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { MdError } from "react-icons/md";

function SearchPlayerInHomePage() {
  const [user, setUser] = useState("");
  const router = useRouter()
  const [isloading, setisloading] = useState(false);
  const [isError, setIsError] = useState(false);
  const updateStatsSearch = useUserStore((state:any) => state.updateStatsSearch)

  const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
    setisloading(true);
    event.preventDefault();
    const result = await getUserStat(user.toLocaleLowerCase());
    if (result?.data.length === 0) {
      setIsError(true);
      setisloading(false);
    }else {
      setisloading(false);
      setIsError(false);
      updateStatsSearch(result?.data[0])
      router.push(`/stats/${result?.data[0].username}`)
    }
  };

  return (
    <div className="flex flex-col">
      <form
        onSubmit={handleSearch}
        className="bg-blur-white backdrop-blur-md 
        flex flex-col lg:rounded-xl"
      >
        <h1 className="p-6 text-center text-3xl uppercase font-semibold text-black">
          Tìm thông tin người chơi
        </h1>
        <input
          required
          placeholder="Enter Username"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          type="text"
          className="bg-[#4f4b4b6e] uppercase placeholder-white text-center h-16 text-2xl text-white outline-none"
        />
        <div className="flex items-center justify-center p-6">
          <button
            disabled={isloading}
            type="submit"
            className={cn(
              "bg-sky-600 hover:scale-105 hover:bg-sky-400 duration-500 uppercase w-[180px] h-[52px] rounded-full text-white font-bold text-lg",
              isloading && "bg-red-500"
            )}
          >
            {isloading ? "Đang tìm kiếm..." : "Tìm kiếm"}
          </button>
        </div>
      </form>

      {isError && (
        <div className="bg-blur-white mt-6 backdrop-blur-md p-4 rounded-lg flex items-center gap-2">
          <MdError className="w-8 h-8 text-red-500" /> Không tìm thấy người chơi
          !
        </div>
      )}
    </div>
  );
}

export default SearchPlayerInHomePage;
