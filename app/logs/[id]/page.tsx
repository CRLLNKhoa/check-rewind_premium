"use client";
import { addCmt, getDetailLog } from "@/action/logs";
import { getUserStat } from "@/action/users";
import SearchPlayerInHomePage from "@/components/homepage/search-player";
import DetailInfo from "@/components/stats/detail-info";
import Info from "@/components/stats/info";
import { FaCheckCircle } from "react-icons/fa";
import Runes from "@/components/stats/runes";
import Skills from "@/components/stats/skills";
import Teams from "@/components/stats/teams";
import WorldTree from "@/components/stats/world-tree";
import React, { useEffect, useState } from "react";
import { MdError } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { useAuth, useUser } from "@clerk/nextjs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import toast from "react-hot-toast";
import moment from "moment";
import { useRouter } from "next/navigation";

function LogPage({ params }: { params: { id: number } }) {
  const [isloading, setisloading] = useState(true);
  const [data, setData] = useState<any[]>([]);
  const { isSignedIn, user } = useUser();
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const [loadingcmt, setloadingcmt] = useState(false);
  const [temp, setTemp] = useState<any[]>([]);
  const router = useRouter()

  const handleCmt = async () => {
    setloadingcmt(true);
    if (input.length < 5) {
      toast.error("Ít nhất 5 ký tự !");
      setloadingcmt(false);
      return;
    }
    const result = await addCmt(input, Number(params.id));
    if (result?.status === 200) {
      toast.success("Thêm thành công !");
      setTemp([
        ...temp,
        {
          avatar: user?.imageUrl,
          username: user?.username,
          content: input,
          created_at: Date.now(),
        },
      ]);
      setOpen(false);
      setloadingcmt(false);
    }
    setloadingcmt(false);
  };

  useEffect(() => {
    setisloading(false);
    const get = async () => {
      const result = await getDetailLog(params.id);
      if (result?.status === 200) {
        setData(result?.data);
        setisloading(false);
        console.log(result);
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
            name={data[0]?.user.username}
            link_facebook={data[0]?.user.link_facebook}
          />
          <DetailInfo
            avatar={data[0]?.user.avatar}
            day={data[0]?.user.day}
            exp={data[0]?.user.exp}
          />
          <h1 className="py-4 px-4 font-bold bg-white flex items-center text-xl justify-between">
            Nhật ký day: {data[0]?.current_day} <Button onClick={() => router.push(`/stats/${data[0].username}`)}>Xem thêm</Button>
          </h1>
          <Teams team={data[0]?.team} />
          <Runes runes={data[0]?.runes} />
          <Skills skills={data[0]?.skills} />
          <WorldTree wt={data[0]?.world_tree} />
          <div className="bg-blur-white p-4 backdrop-blur-md flex flex-col">
            <h1 className="font-bold text-xl">Ghi chú</h1>
            <p className="bg-blur-white p-4 mt-4 rounded-lg">{data[0].note}</p>
          </div>
          <h1 className="py-4 text-center font-bold bg-white">Bình luận</h1>
          <div className="flex items-center justify-end py-4 px-4 bg-blur-white backdrop-blur-md text-center font-bold">
            {isSignedIn ? (
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button>Thêm bình luận</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Thêm bình luận</DialogTitle>
                    <DialogDescription>
                      Bình luận phải văn minh nhé ! (có auto ban)
                    </DialogDescription>
                  </DialogHeader>
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="outline-none"
                    placeholder="Nội dung bình luận"
                  ></textarea>
                  <Button disabled={loadingcmt} onClick={handleCmt}>
                    Thêm
                  </Button>
                </DialogContent>
              </Dialog>
            ) : (
              <Button>Đăng nhập</Button>
            )}
          </div>
          <div className="py-4 pb-12 bg-blur-white backdrop-blur-md flex flex-col px-4 gap-6">
            <div className="flex  w-full items-start">
              <div className="size-12 rounded-full overflow-hidden">
                <img
                  src="/admin.jpg"
                  alt="as"
                  className="w-full h-full"
                />
              </div>
              <div className="bg-white p-4 flex-1 ml-2 rounded-lg">
                <p className="font-bold flex items-center">
                  Lương Khoa
                  <FaCheckCircle className="text-green-600 ml-2" />
                </p>
                <p>Quá hữu ích luôn ! cảm ơn bạn đã đóng góp cho website.</p>
                <p className="text-end">1205 năm trước</p>
              </div>
            </div>
            {data[0]?.cmt.map((item: any) => (
              <div className="flex  w-full items-start">
                <div className="size-12 rounded-full overflow-hidden">
                  <img
                    src={item.user.avatar}
                    alt="as"
                    className="w-full h-full"
                  />
                </div>
                <div className="bg-white p-4 flex-1 ml-2 rounded-lg">
                  <p className="font-bold flex items-center">
                    {item.user.username}
                  </p>
                  <p>{item.content}</p>
                  <p className="text-end">
                    {moment(item.created_at).fromNow()}
                  </p>
                </div>
              </div>
            ))}
            {temp.map((item: any) => (
              <div className="flex  w-full items-start">
                <div className="size-12 rounded-full overflow-hidden">
                  <img src={item.avatar} alt="as" className="w-full h-full" />
                </div>
                <div className="bg-white p-4 flex-1 ml-2 rounded-lg">
                  <p className="font-bold flex items-center">{item.username}</p>
                  <p>{item.content}</p>
                  <p className="text-end">
                    {moment(item.created_at).fromNow()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }
}

export default LogPage;
