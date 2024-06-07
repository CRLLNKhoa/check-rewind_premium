import SearchPlayerInHomePage from "@/components/homepage/search-player";
import React from "react";

function StatsPage() {
  return (
    <main className="flex w-full flex-col py-6 items-center justify-center">
      <div className="w-full max-w-[1024px] flex flex-col gap-6 p-4">
        <SearchPlayerInHomePage />
      </div>
    </main>
  );
}

export default StatsPage;
