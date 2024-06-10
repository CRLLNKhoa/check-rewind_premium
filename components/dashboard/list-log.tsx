import React from "react";
import { Button } from "../ui/button";
import LogCard from "./log-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { TLog } from "@/types";
import { useRouter } from "next/navigation";

function ListLog({ logs }: { logs: TLog[] }) {
  const renderDivs = () => {
    const slider = [];
    for (let i = 0; i < logs.length; i += 5) {
      const itemsInDiv = logs.slice(i, i + 5);
      slider.push(
        <CarouselItem className="flex flex-col gap-2">
          {itemsInDiv.map((item: TLog) => (
            <LogCard key={item.id} log={item} />
          ))}
        </CarouselItem>
      );
    }
    console.log(slider)
    return slider;
  };

  return (
    <div className=" flex flex-col gap-2 pl-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        orientation="vertical"
        className="w-full"
      >
        <CarouselContent className="h-[360px] -mt-1">
          {logs.length < 6 && (
            <CarouselItem className="flex flex-col gap-2">
              {logs.map((item: TLog) => (
                <LogCard key={item.id} log={item} />
              ))}
            </CarouselItem>
          )}
          {logs.length > 6 && renderDivs()}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export function Empty() {
  const router = useRouter()
  return (
    <div className="flex w-full h-[320px] flex-col justify-center items-center">
      <div className="flex">
        <img src="/empty.png" alt="" />
      </div>
      <h2 className="text-xl font-bold">Bạn chưa thêm nhật ký nào !</h2>
      <Button onClick={() => router.push("/logs/new")} className="mt-4">Thêm nhật ký</Button>
    </div>
  );
}

export default ListLog;
