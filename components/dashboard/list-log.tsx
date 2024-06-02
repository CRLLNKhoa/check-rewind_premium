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

function ListLog() {
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
          <CarouselItem  className="flex flex-col gap-2">
            <LogCard />
            <LogCard />
            <LogCard />
            <LogCard />
            <LogCard />
          </CarouselItem>
          <CarouselItem  className="flex flex-col gap-2">
            <LogCard />
            <LogCard />
            <LogCard />
            <LogCard />
            <LogCard />
          </CarouselItem>
          <CarouselItem  className="flex flex-col gap-2">
            <LogCard />
            <LogCard />
            <LogCard />
            <LogCard />
            <LogCard />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

function Empty() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex">
        <img src="/empty.png" alt="" />
      </div>
      <h2 className="text-xl font-bold">Bạn chưa thêm nhật ký nào !</h2>
      <Button className="mt-4">Thêm nhật ký</Button>
    </div>
  );
}

export default ListLog;
