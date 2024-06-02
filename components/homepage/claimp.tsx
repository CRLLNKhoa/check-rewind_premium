import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel-claimp";
import { Button } from "../ui/button";
import { IoHelpCircleOutline } from "react-icons/io5";

function Claimp() {
  return (
    <div
      className="w-full bg-blur-white select-none backdrop-blur-md p-4 flex flex-col items-center justify-center 
    rounded-lg"
    >
      <h1 className=" text-3xl font-bold">Thử vận may</h1>
      <p className="mb-6">Mỗi ngày nhận được 1 lượt quay miễn phí !</p>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-[240px] overflow-hidden lg:max-w-3xl "
      >
        <CarouselContent className="flex items-center">
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="rounded-2xl relative h-[324px] border-none bg-gradient-to-br from-blue-500/20 to-blue-600 backdrop-blur-xl">
                <CardContent
                  className="flex items-center justify-between p-6
                 flex-col h-full"
                >
                  <img className="rounded-lg" src="/anh2.gif" alt="claim" />
                  <h1 className="text-xl font-bold text-white flex flex-col items-center gap-1 my-4 uppercase">
                    Gói quà ruby 1 <div className="cursor-pointer"><IoHelpCircleOutline /></div>
                  </h1>
                  <Button
                    className="rounded-full bg-white text-black mt-auto
                     hover:bg-white font-bold h-12 w-full text-xl"
                  >
                    x10{" "}
                    <img src="/ruby.webp" alt="icon" className="w-6 h-6 ml-2" />{" "}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="rounded-2xl border-none h-[324px] bg-gradient-to-r from-gray-700 to-black backdrop-blur-md">
                <CardContent
                  className="flex h-full items-center justify-between p-6
                 flex-col"
                >
                  <img className="rounded-lg" src="/anh1.gif" alt="claim" />
                  <h1 className="text-xl font-bold text-white my-4">
                    Daily Reward
                  </h1>
                  <Button
                    className="rounded-full bg-white text-black
                     hover:bg-white font-bold mt-auto h-12  w-full"
                  >
                    Claim Reward
                  </Button>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="rounded-2xl h-[324px] border-none bg-gradient-to-br from-fuchsia-900 to-purple-700 backdrop-blur-md">
                <CardContent
                  className="flex items-center justify-between p-6
                 flex-col h-full"
                >
                  <img className="rounded-lg" src="/anh3.gif" alt="claim" />
                  <h1 className="text-xl font-bold text-white my-4 uppercase">
                    Gói quà ruby 2
                  </h1>
                  <Button
                    className="rounded-full bg-white text-black
                     hover:bg-white font-bold h-12 w-full text-xl mt-auto"
                  >
                    x100{" "}
                    <img src="/ruby.webp" alt="icon" className="w-6 h-6 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default Claimp;
