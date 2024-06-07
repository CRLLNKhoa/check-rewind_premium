"use client";
import { updateStat } from "@/action/users";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import toast from "react-hot-toast";

function ProfileInfo({ data }: { data: { bio: string; link: string } }) {
  const [input, setInput] = useState(data);
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdate = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const result = await updateStat({
      bio: input.bio,
      link_facebook: input.link,
    });
    if (result?.status === 200) {
      toast.success("Cập nhật thành công !");
      setIsLoading(false);
    } else setIsLoading(false);
  };

  return (
    <div className=" p-4 rounded-lg">
      <form onSubmit={handleUpdate} className="flex flex-col  gap-4">
        <div className="border p-4 border-white bg-white rounded-lg">
          <input
            value={input.bio}
            onChange={(e) => setInput({ ...input, bio: e.target.value })}
            className="bg-transparent border-white outline-none w-full h-full"
            placeholder="Nhập bio..."
          />
        </div>

        <div className="border p-4 border-white bg-white rounded-lg">
          <input
            value={input.link}
            onChange={(e) => setInput({ ...input, link: e.target.value })}
            className="bg-transparent border-white outline-none w-full h-full"
            placeholder="Nhập link Facebook..."
          />
        </div>

        <button
          disabled={isLoading}
          type="submit"
          className={cn(
            "bg-sky-600 p-4 text-white rounded-lg",
            isLoading && "bg-red-500"
          )}
        >
          {isLoading ? "Đang xử lý..." : "Lưu thông tin"}
        </button>
      </form>
    </div>
  );
}

export default ProfileInfo;
