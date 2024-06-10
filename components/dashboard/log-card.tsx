"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { RiHeart2Line } from "react-icons/ri";
import { BsChatSquareText } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import { TLog } from "@/types";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { deleteLog } from "@/action/logs";

function LogCard({ log }: { log: TLog }) {
  const router = useRouter();
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = async () => {
    const result = await deleteLog(Number(log.id));
    if (result?.status === 200) {
      toast.success("Xóa thành công !");
      setIsDeleted(true);
    }
  };

  return (
    <div className="relative bg-blur-white rounded-lg overflow-hidden p-4 flex justify-between items-center">
      <h2 className="font-bold text-sky-600">Day: 23,425</h2>
      <div className="items-center text-sm hidden lg:flex gap-4">
        <div className="flex items-center gap-1">
          <RiHeart2Line className="text-lg" />
          <p>{log.like}</p>
        </div>
        <div className="flex items-center gap-1">
          <BsChatSquareText className="text-md" />
          <p>{log.cmt?.length || 0}</p>
        </div>
        <div className="flex items-center gap-1">
          <FaRegEye className="text-md" />
          <p>{log.view}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant={"outline"}
          size={"sm"}
          className="text-xs h-6 hidden lg:block"
          onClick={() => router.push(`/logs/${log.id}`)}
        >
          Xem
        </Button>
        <Button
          variant={"outline"}
          size={"sm"}
          className="text-xs h-6"
          onClick={() =>
            router.push(`/logs/edit/${log.id}?user_id=${log.user_id}`)
          }
        >
          Chỉnh sửa
        </Button>
        <Button
          onClick={handleDelete}
          variant={"destructive"}
          size={"sm"}
          className="text-xs h-6"
        >
          Xóa
        </Button>
      </div>
      {isDeleted && (
        <div
          className="w-full h-full absolute bg-blur-white backdrop-blur-md 
      rounded-lg top-0 bottom-0 left-0 right-0 flex items-center justify-center"
        >
          <h2>Đã xóa !</h2>
        </div>
      )}
    </div>
  );
}

export default LogCard;
