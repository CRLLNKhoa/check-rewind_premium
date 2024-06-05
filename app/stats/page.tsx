import DetailInfo from "@/components/stats/detail-info";
import Info from "@/components/stats/info";
import Inventory from "@/components/stats/inventory";
import ListLog from "@/components/stats/list-log";
import Runes from "@/components/stats/runes";
import Skills from "@/components/stats/skills";
import Teams from "@/components/stats/teams";
import WorldTree from "@/components/stats/world-tree";
import React from "react";

function StatsPage() {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <div className="w-full max-w-[1024px] bg-blur-white backdrop-blur-md flex flex-col">
        <Info />
        <DetailInfo />
        <Teams />
        <Runes />
        <Skills />
        <WorldTree />
        <Inventory />
        <ListLog />
      </div>
    </main>
  );
}

export default StatsPage;
