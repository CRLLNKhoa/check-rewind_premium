import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/" className="w-[50px] h-[36px] bg-black rounded-md cursor-pointer
    text-white flex items-center justify-center font-bold text-lg">
      CRW
    </Link>
  );
}
