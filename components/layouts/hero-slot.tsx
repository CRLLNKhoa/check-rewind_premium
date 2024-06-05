"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { BiCaretDown } from "react-icons/bi";
import { CheckCheckIcon } from "lucide-react";
import hero from "@/json/hero.json";
import { FaStar } from "react-icons/fa";

type THero = {
  index: number;
  name: string;
  star: number;
  avatar: string;
};

function formatName(name: string) {
  // Chia chuỗi thành mảng các từ
  const words = name.split(" ");

  // Kiểm tra xem có bao nhiêu từ
  if (words.length === 1) {
    // Nếu chỉ có 1 từ, trả về nguyên chuỗi đó
    return name;
  } else {
    // Nếu có nhiều từ, nối các từ lại với dấu "-" ở giữa
    const formattedName = words.join("-");
    return formattedName;
  }
}

export function SlotHero({
  slot,
  team,
  setTeam,
}: {
  slot: THero;
  team: THero[];
  setTeam: any;
}) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(slot.name);

  const handleSetSlot = (team: THero[], index: number, hero: string) => {
    const location = team.findIndex((item: THero) => item.index === index);
    if (location === -1) {
      return "Item not found";
    }

    team[location] = {
      ...team[index],
      name: hero,
      avatar: `${formatName(hero)}.webp`,
    };
    setTeam(team);
  };

  const handleSetStarSlot = (team: THero[], index: number, star: number) => {
    const location = team.findIndex((item: THero) => item.index === index);
    if (location === -1) {
      return "Item not found";
    }

    team[location] = { ...team[index], star: star };
    setTeam(team);
  };
  return (
    <div className="relative">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between border-none"
          >
            {value
              ? hero.find((framework) => framework.name === value)?.name
              : "Chọn Hero..."}
            <BiCaretDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search framework..." className="h-9" />
            <CommandList>
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {hero.map((framework) => (
                  <CommandItem
                    key={framework.name}
                    value={framework.name}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      handleSetSlot(team, slot.index, framework.name);
                      setOpen(false);
                    }}
                  >
                    {framework.name}
                    <CheckCheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        value === framework.name ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {value && (
        <div className="absolute right-0 flex items-center gap-2 bg-blur-white px-2">
          <p>
            <FaStar />
          </p>
          <input
            required
            onChange={(e) =>
              handleSetStarSlot(team, slot.index, Number(e.target.value))
            }
            type="number"
            min={0}
            className="w-12 text-center"
          />
        </div>
      )}
    </div>
  );
}
