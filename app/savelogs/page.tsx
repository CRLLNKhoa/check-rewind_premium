import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function SaveLogs() {
  return (
    <main className="w-full flex justify-center p-4 h-full">
      <div className="w-full max-w-3xl border border-border rounded-lg p-4 bg-background dark:bg-secondary">
        <h1 className="font-bold text-2xl">Nhật ký đã lưu</h1>
        <div className="flex items-center gap-4 mt-8 justify-between">
            <div className="size-10 bg-black rounded-full overflow-hidden"></div>
            <Link href={"/log/123"} className="flex flex-col mr-auto ml-4 group">
                <h2 className="font-bold flex items-center text-lg gap-2 group-hover:text-sky-600">Nhật ký của leo day:<p className="text-red-500"> 23,023</p></h2>
                <div className="flex items-center">
                    <Link className="font-semibold" href={"/user/saim"}>saim</Link>
                    <p className="mx-2">-</p>
                    <p className="text-sm">đã thêm 3 ngày trước</p>
                </div>
            </Link>
            <Button variant={"outline"} size={"sm"}>Xóa</Button>
        </div>
      </div>
    </main>
  );
}

export default SaveLogs;
