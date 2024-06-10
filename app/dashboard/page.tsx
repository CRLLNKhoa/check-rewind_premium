"use client";
import { getStat } from "@/action/users";
import Chart from "@/components/dashboard/chart";
import GeneralDashboard from "@/components/dashboard/general-dashboard";
import ItemCard from "@/components/dashboard/item-card";
import ListLog, { Empty } from "@/components/dashboard/list-log";
import { useUserStore } from "@/store/user";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BiBookContent } from "react-icons/bi";

function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const updateUser = useUserStore((state: any) => state.updateUser);
  const userStore = useUserStore((state: any) => state.user);
  const { isLoaded, isSignedIn } = useUser();

  useEffect(() => {
    setIsLoading(true);
    const get = async () => {
      const result = await getStat();
      if (result?.data.length !== 0) {
        updateUser(result?.data[0]);
        setIsLoading(false);
      }
      setIsLoading(false);
    };
    get();
  }, []);

  const router = useRouter();
  useEffect(() => {
    if (!isSignedIn) {
      router.push("/sign-in");
    }
  }, []);

  return (
    <div className="p-4">
      <div className="flex flex-col p-4 bg-blur-white backdrop-blur-md rounded">
        <h1 className="font-bold text-2xl">Thống kê nhật ký</h1>
        {!isLoading && (
          <div className="my-6">
            <GeneralDashboard data={userStore?.log} />
            <div className="grid grid-cols-1 lg:grid-cols-3 items-end mt-4 gap-y-4 lg:gap-4 ">
              <div className="flex flex-col ">
                <ItemCard
                  title="Số Nhật ký đã thêm"
                  icon={<BiBookContent />}
                  count={userStore?.log.length}
                  sub="Tất cả bài viết"
                />
                <Chart />
              </div>
              <div className="col-span-2 p-4 bg-blur-black border border-border rounded-md dark:border-white/20">
                <h2 className="font-bold text-lg mb-4 text-white">
                  Quản lí nhật ký
                </h2>
                <div className="flex flex-col">
                  {userStore.log.length === 0 && <Empty />}
                  {userStore.log.length > 0 && <ListLog logs={userStore.log} />}
                </div>
              </div>
            </div>
          </div>
        )}
        {isLoading && (
          <div className="h-[360px] w-full flex items-center justify-center">
            <h1 className="font-bold text-xl">Đang tải dữ liệu...</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
