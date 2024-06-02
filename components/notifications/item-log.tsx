import React from 'react'
import Link from "next/link";
import { Button } from "../ui/button";
import { RiHeart2Line, RiHeart2Fill } from "react-icons/ri";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

function ItemLog() {
  return (
    <div className="border border-border dark:border-white/20 p-4 rounded-md flex flex-col">
    <div className="flex items-center">
      <div className="size-12 bg-black rounded-full overflow-hidden">
        <img
          src="https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F402320%2Fc454e1f2-7d79-47c0-90eb-90e10e2d0d4c.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col ml-4">
        <div className="flex items-center">
          <Link
            href={"/user/saim"}
            className="font-bold mr-2 cursor-pointer"
          >
            saim
          </Link>
          <p className='text-sm'>đã thêm nhật ký mới</p>
        </div>
        <p className="text-muted-foreground text-sm">
          Đã thêm 6 ngày trước
        </p>
      </div>
    </div>
    <div className="flex flex-col border border-border dark:border-white/20 mt-4 rounded-md">
      <Link href={"/log/123"} className="flex group p-2 font-bold text-xl gap-4 flex-wrap text-sky-600">
        <h2 className="uppercase group-hover:underline">Cùng tôi leo day thôi nào !</h2>
        <h3 className="text-red-600 text-lg">DAY: 32,092</h3>
      </Link>
      <div className="border-t border-border dark:border-white/20 flex items-center p-1">
        <Button variant={"ghost"} size={"sm"}>
          <RiHeart2Line className="mr-2" /> Hữu ích
        </Button>
        <Button variant={"ghost"} size={"sm"} className="!text-red-600">
          <RiHeart2Fill className="mr-2" /> Đã thích
        </Button>
        <Button variant={"ghost"} size={"sm"}>
          <FaRegBookmark className="mr-2" /> Lưu lại
        </Button>
        <Button variant={"ghost"} size={"sm"} className="!text-yellow-600">
          <FaBookmark className="mr-2" /> Đã lưu
        </Button>
      </div>
    </div>
  </div>
  )
}

export default ItemLog