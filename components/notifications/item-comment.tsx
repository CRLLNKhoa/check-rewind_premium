import React from 'react'
import Link from "next/link";
import { Button } from "../ui/button";
import { RiHeart2Line, RiHeart2Fill } from "react-icons/ri";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

function ItemComment() {
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
          <p className='text-sm'>đã thêm bình luận mới</p>
        </div>
        <p className="text-muted-foreground text-sm">
          Đã thêm 6 ngày trước
        </p>
      </div>
    </div>
    <Link href={"/log/123#comments"} className='border border-border dark:border-white/20 p-2 mt-4 rounded-md'>
        <p className='line-clamp-2 text-sm text-muted-foreground'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias tenetur ipsum minima officiis! Sequi cumque blanditiis, expedita dolorum doloremque, facere dolores, modi quis quisquam numquam eveniet harum corporis adipisci mollitia?</p>
      </Link>
  </div>
  )
}

export default ItemComment