"use client";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ProfileInfo from "@/components/profile/profile-info";
import ProfileGame from "@/components/profile/profile-game";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { createStat, getStat } from "@/action/users";
import toast from "react-hot-toast";
import { useUserStore } from "@/store/user";

function ProfilePage() {
  const router = useRouter();
  const [stats, setStats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const updateUser = useUserStore((state: any) => state.updateUser);
  const userStore = useUserStore((state: any) => state.user);
  const { isLoaded, isSignedIn } = useUser();

  useEffect(() => {
    const get = async () => {
      const result = await getStat();
      setStats(result?.data[0]);
      updateUser(result?.data[0]);
      setIsLoading(false)
    };
    get();
  }, []);

  const handleCreate = async () => {
    toast.promise(createStat(), {
      loading: "Đang tạo...",
      success: <b>Tạo thành công !</b>,
      error: <b>Có lỗi xảy ra.</b>,
    });
  };

  if (!isSignedIn && isLoaded) {
    return (
      <main className="flex w-full flex-col items-center justify-center py-6">
        <div
          className="w-full max-w-[1024px] min-h-[320px] p-4 rounded-lg 
        bg-blur-white backdrop-blur-md flex flex-col items-center justify-center"
        >
          <h1 className="font-bold text-xl">Đăng nhập ngay</h1>
          <Button onClick={() => router.push("/sign-in")} className="mt-2">
            Đăng nhập
          </Button>
        </div>
      </main>
    );
  }

  if (isSignedIn && stats?.length < 1 && !isLoading) {
    return (
      <main className="flex w-full flex-col items-center justify-center py-6">
        <div
          className="w-full max-w-[1024px] min-h-[320px] p-4 rounded-lg 
        bg-blur-white backdrop-blur-md flex flex-col items-center justify-center"
        >
          <h1 className="font-bold text-xl">Tạo trang thông tin</h1>
          <Button onClick={handleCreate} className="mt-4">
            Tạo trang
          </Button>
        </div>
      </main>
    );
  }

  if (userStore?.user_id) {
    return (
      <main className="flex w-full flex-col items-center justify-center py-6">
        <div className="w-full max-w-[1024px] min-h-[320px] p-4 rounded-lg bg-blur-white backdrop-blur-md flex flex-col">
          <h1 className="text-xl text-sky-600">Thông tin chung</h1>
          <ProfileInfo data={{bio: userStore.bio, link: userStore.link_facebook}} />
          <Accordion type="multiple">
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl text-sky-600">
                Thông tin game
              </AccordionTrigger>
              <AccordionContent>
                <ProfileGame />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
    );
  }

  if (isLoading) {
    return (
      <main className="flex w-full flex-col items-center justify-center py-6">
        <div
          className="w-full max-w-[1024px] min-h-[320px] p-4 rounded-lg 
      bg-blur-white backdrop-blur-md flex flex-col items-center justify-center"
        >
          <h1 className="font-bold text-xl animate-pulse">
            Đang lấy thông tin...
          </h1>
        </div>
      </main>
    );
  }
}

export default ProfilePage;
