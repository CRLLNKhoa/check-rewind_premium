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
import Reward1 from "./reward-1";
import Reward2 from "./reward-2";
import Reward3 from "./reward-3";

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
            <Reward2 />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Reward1 />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Reward3 />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default Claimp;
