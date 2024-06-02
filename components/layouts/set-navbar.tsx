"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useSettingStore } from "@/store/setting";

function SetNavbar() {
  const headerChoice = useSettingStore((state: any) => state.headerFixed);
  const update = useSettingStore((state: any) => state.updateHeader);
  return (
    <RadioGroup onValueChange={(e) => update(e)} defaultValue={headerChoice || "fixed"}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-6 gap-6">
        <Label
          htmlFor="option-one"
          className="flex items-center gap-4 border border-border dark:border-white/20 rounded-md p-6 cursor-pointer"
        >
          <RadioGroupItem value="fixed" id="option-one" />
          Cố định
        </Label>
        <Label
          htmlFor="option-two"
          className="flex items-center gap-4 border border-border dark:border-white/20 rounded-md p-6 cursor-pointer"
        >
          <RadioGroupItem value="sticky" id="option-two" />
          Ghim trên màn hình
        </Label>
      </div>
    </RadioGroup>
  );
}

export default SetNavbar;
