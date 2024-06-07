import React from "react";
import { FaRegStar } from "react-icons/fa";
import { IoLogoFacebook, IoShareSocial } from "react-icons/io5";

function Info({
  name,
  link_facebook,
}: {
  name: string;
  link_facebook: string;
}) {
  return (
    <div className="bg-blur-white p-4 flex flex-col gap-4">
      <div className="flex items-center text-2xl select-none">
        Stats for
        <div className="bg-blur-black p-2 rounded-full flex items-center text-white ml-2">
          <span className="bg-sky-600 px-4 py-1 rounded-full mr-2 font-bold text-sm">
            VIP
          </span>
          <h1 className="text-2xl">{name}</h1>
        </div>
      </div>
      <div className="flex items-center text-white gap-4">
        <div className="rounded-full bg-sky-600 p-2 cursor-pointer">
          <FaRegStar />
        </div>
        <div className="rounded-full bg-sky-600 p-2 cursor-pointer">
          <IoShareSocial />
        </div>
        <a href={link_facebook} target="_blank" className="rounded-full bg-sky-600 p-2 cursor-pointer">
          <IoLogoFacebook />
        </a>
      </div>
    </div>
  );
}

export default Info;
