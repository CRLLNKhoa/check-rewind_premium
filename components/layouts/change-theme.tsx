"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useTheme } from "next-themes";

function ChangeTheme() {
  const { setTheme } = useTheme();
  return (
    <RadioGroup onValueChange={(e) => setTheme(e)} defaultValue="light">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        <Label
          htmlFor="r1"
          className="border dark:border-white/20 flex flex-col p-6 rounded-md bg-second cursor-pointer"
        >
          <div className="flex items-center gap-4">
            <RadioGroupItem value="light" id="r1" />
            <p>Light Theme</p>
          </div>
          <div className="theme-preview mt-4 border">
            <div className="theme-preview__nav !bg-[#FDF9F3]">
              <div className="theme-preview__search"></div>
            </div>
            <div className="theme-preview__main border">
              <div className="theme-preview__card border"></div>
              <div className="theme-preview__middle border">
                ~ ~ ~<div className="theme-preview__card"></div>
              </div>
              <div className="theme-preview__card border"></div>
            </div>
          </div>
        </Label>
        <Label
          htmlFor="r2"
          className="dark:border-white/20 border flex flex-col p-6 rounded-md bg-second cursor-pointer"
        >
          <div className="flex items-center gap-4">
            <RadioGroupItem value="dark" id="r2" />
            <p>Dark Theme</p>
          </div>
          <div className="theme-preview mt-4 !bg-black">
            <div className="theme-preview__nav !bg-[#202C3D]">
              <div className="theme-preview__search !bg-[#424A54]"></div>
            </div>
            <div className="theme-preview__main">
              <div className="theme-preview__card !bg-[#202C3D]"></div>
              <div className="theme-preview__middle text-white">
                ~ ~ ~<div className="theme-preview__card !bg-[#202C3D]"></div>
              </div>
              <div className="theme-preview__card !bg-[#202C3D]"></div>
            </div>
          </div>
        </Label>
      </div>
    </RadioGroup>
  );
}

export default ChangeTheme;
