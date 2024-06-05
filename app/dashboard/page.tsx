import Chart from "@/components/dashboard/chart";
import GeneralDashboard from "@/components/dashboard/general-dashboard";
import ItemCard from "@/components/dashboard/item-card";
import ListLog from "@/components/dashboard/list-log";
import React from "react";
import { BiBookContent } from "react-icons/bi";

function Dashboard() {
  return (
    <div className="p-4">
      <div className="flex flex-col p-4 bg-blur-white backdrop-blur-md rounded">
        <h1 className="font-bold text-2xl">Thống kê nhật ký</h1>
        <div className="my-6">
          <GeneralDashboard />
          <div className="grid grid-cols-1 lg:grid-cols-3 items-end mt-4 gap-y-4 lg:gap-4 ">
           <div className="flex flex-col ">
              <ItemCard
                title="Số Nhật ký đã thêm"
                icon={<BiBookContent />}
                count={1324231}
                sub="Tất cả lượt xem của tất cả bài viết"
              />
              <Chart />
           </div>
           <div className="col-span-2 p-4 bg-blur-black border border-border rounded-md dark:border-white/20">
            <h2 className="font-bold text-lg mb-4">Quản lí nhật ký</h2>
            <div className="flex flex-col">
              <ListLog />
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
