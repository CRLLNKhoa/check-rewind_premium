"use client";
import React, { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineEgg } from "react-icons/md";
import { GoSmiley } from "react-icons/go";
import { getListUser } from "@/action/users";

function ListTopPlayer() {
  const [list, setList] = useState<any[]>([]);
  const [isloading, setisloading] = useState(true);

  useEffect(() => {
    setisloading(true);
    const get = async () => {
      const result = await getListUser();
      if (result?.status === 200) {
        setList(result.data);
        setisloading(false);
      }
      setisloading(false);
    };
    get();
  }, []);

  return (
    <div className="grid lg:grid-cols-3 gap-4">
      <div className="bg-blur-white backdrop-blur-md cursor-pointer hover:scale-[1.02] duration-500 select-none p-4 rounded-lg relative flex items-center">
        <img src="/admin.jpg" alt="img" className="size-16 rounded-md" />
        <div className="flex flex-col ml-4">
          <h2 className="font-bold flex items-center gap-2">
            Lương Khoa <FaCheckCircle className="text-sm text-green-600" />
          </h2>
          <p className="text-sm">First Online: May 12th, 2000</p>
        </div>
        <p className="absolute bottom-2 right-2" title="Checkcost Maintainer">
          <FaCode />
        </p>
      </div>
      {list.map((item: any) => (
        <div
          key={item.user_id}
          className="bg-blur-white backdrop-blur-md cursor-pointer hover:scale-[1.02] duration-500 select-none p-4 rounded-lg relative flex items-center"
        >
          <img src={item.avatar} alt="img" className="size-16 rounded-md" />
          <div className="flex flex-col ml-4">
            <h2 className="font-bold flex items-center gap-2">
              {item.username}
            </h2>
            <p className="text-sm">{item.bio}</p>
          </div>
          <p className="absolute bottom-2 right-2" title="Checkcost Chick">
            <MdOutlineEgg />
          </p>
        </div>
      ))}
      {isloading && (
        <>
          <div className="bg-blur-white backdrop-blur-md p-4 h-[90px] rounded-lg animate-pulse"></div>
          <div className="bg-blur-white backdrop-blur-md p-4 h-[90px] rounded-lg animate-pulse"></div>
          <div className="bg-blur-white backdrop-blur-md p-4 h-[90px] rounded-lg animate-pulse"></div>
          <div className="bg-blur-white backdrop-blur-md p-4 h-[90px] rounded-lg animate-pulse"></div>
          <div className="bg-blur-white backdrop-blur-md p-4 h-[90px] rounded-lg animate-pulse"></div>
        </>
      )}
    </div>
  );
}

export default ListTopPlayer;
