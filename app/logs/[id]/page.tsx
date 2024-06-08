"use client";
import { getDetailLog } from "@/action/logs";
import { getUserStat } from "@/action/users";
import SearchPlayerInHomePage from "@/components/homepage/search-player";
import DetailInfo from "@/components/stats/detail-info";
import Info from "@/components/stats/info";
import Inventory from "@/components/stats/inventory";
import ListLog from "@/components/stats/list-log";
import Runes from "@/components/stats/runes";
import Skills from "@/components/stats/skills";
import Teams from "@/components/stats/teams";
import WorldTree from "@/components/stats/world-tree";
import React, { useEffect, useState } from "react";
import { MdError } from "react-icons/md";

function LogPage({ params }: { params: { id: number } }) {
  const [isloading, setisloading] = useState(true);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    setisloading(false);
    const get = async () => {
      const result = await getDetailLog(params.id);
      if (result?.status === 200) {
        setData(result?.data);
        setisloading(false);
      }
    };
    get();
  }, []);

  if (isloading === true) {
    return (
      <main className="flex w-full h-full flex-col py-6 items-center justify-center">
        <div className="w-full rounded-lg max-w-[1024px] bg-blur-white backdrop-blur-md h-[320px] items-center justify-center  flex flex-col gap-6 p-4">
          <h1 className="text-xl font-bold animate-pulse">
            Đang lấy thông tin...
          </h1>
        </div>
      </main>
    );
  }

  if (data.length === 0 && isloading === false) {
    return (
      <main className="flex w-full flex-col py-6 items-center justify-center">
        <div className="w-full max-w-[1024px] flex flex-col gap-6 p-4">
          <SearchPlayerInHomePage />
          <div className="bg-blur-white mt-6 backdrop-blur-md p-4 rounded-lg flex items-center gap-2">
            <MdError className="w-8 h-8 text-red-500" /> Không tìm thấy nhật ký
            : {params.id}!
          </div>
        </div>
      </main>
    );
  }

  if (data.length > 0) {
    return (
      <main className="flex w-full flex-col items-center justify-center">
        <div className="w-full max-w-[1024px] bg-blur-black flex flex-col">
          <Info
            name={data[0]?.username}
            link_facebook={data[0]?.link_facebook}
          />
          <DetailInfo
            avatar={data[0]?.avatar}
            day={data[0]?.day}
            exp={data[0]?.exp}
          />
          <Teams team={data[0]?.team} />
          <Runes runes={data[0]?.runes} />
          <Skills skills={data[0]?.skills} />
          <WorldTree wt={data[0]?.world_tree} />
          <Inventory
            ruby={data[0]?.ruby}
            medal={{ wt: data[0]?.medal_apple, void: data[0]?.medal_void }}
          />
          <ListLog logs={data[0]?.log} />
        </div>
      </main>
    );
  }
}

export default LogPage;
