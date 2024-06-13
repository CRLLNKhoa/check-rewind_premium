"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FiFilter } from "react-icons/fi";
import ItemLog from "@/components/homepage/item-log";
import { TLog } from "@/types";
import { getLogPage, getLogs } from "@/action/logs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TiArrowSortedDown } from "react-icons/ti";

function LogsPage() {
  const [list, setList] = useState<any[]>([]);
  const [isloading, setisloading] = useState(true);
  const [count, setcount] = useState(1);
  const [sortState, setSortState] = useState("asc");
  const [minState, setMinState] = useState(0);
  const [maxState, setMaxState] = useState(999999);
  const search = useSearchParams();
  const min = search.get("min");
  const max = search.get("max");
  const sort = search.get("sort");
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageCurrent = searchParams.get("page");

  useEffect(() => {
    setisloading(true);
    const get = async () => {
      const result = await getLogPage(String(sort));
      if (result?.status === 200) {
        setList(result.data);
        setcount(result.count || 1);
        setisloading(false);
      }
      setisloading(false);
    };
    get();
  }, []);

  useEffect(() => {
    setisloading(true);
    const get = async () => {
      const result = await getLogPage(
        String(sort),
        Number(min) || 0,
        Number(max) || 999999,
        Number(pageCurrent)
      );
      if (result?.status === 200) {
        setList(result.data);
        setcount(result.count || 1);
        setisloading(false);
      }
      setisloading(false);
    };
    get();
  }, [pageCurrent, sort, min, max]);

  const handleFilter = () => {
    router.push(
      `/logs?page=${pageCurrent}&sort=${sortState}&min=${minState}&max=${maxState}`
    );
  };

  const handleChangePage = (e: any) => {
    router.push(`/logs?page=${e}`);
  };

  return (
    <main className="flex w-full flex-col py-6 items-center justify-center">
      <div className="w-full max-w-[1024px] bg-blur-white backdrop-blur-md rounded-lg flex flex-col gap-6 p-4">
        <div className="flex items-center justify-between flex-wrap gap-y-4">
          <RadioGroup
            onValueChange={(e: string) => setSortState(String(e))}
            className="flex items-center flex-wrap"
            defaultValue="asc"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="asc" id="asc" />
              <Label htmlFor="asc">Day: A-Z</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="desc" id="desc" />
              <Label htmlFor="desc">Day: Z-A</Label>
            </div>
          </RadioGroup>
          <Popover>
            <PopoverTrigger asChild>
              <div className="flex items-center mr-auto ml-4 cursor-pointer">
                Chọn day <TiArrowSortedDown className="ml-2" />
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <div className="ml-4 p-4 py-8 mt-4 border-black flex items-center gap-4">
                <div className="relative">
                  <p className="absolute -top-6">Từ: </p>
                  <input
                    value={minState}
                    onChange={(e) => setMinState(Number(e.target.value))}
                    className="outline-none border-b border-black px-2 bg-transparent"
                    type="number"
                    placeholder="Từ day..."
                  />
                </div>
                <div className="relative">
                  <p className="absolute -top-6">Đến: </p>
                  <input
                    value={maxState}
                    onChange={(e) => setMaxState(Number(e.target.value))}
                    className="outline-none border-b border-black px-2 bg-transparent"
                    type="number"
                    placeholder="Đến day..."
                  />
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <Button onClick={handleFilter} size={"sm"}>
            <FiFilter className="mr-2" /> Lọc
          </Button>
        </div>
        {!isloading && (
          <div className="grid lg:grid-cols-2 gap-6">
            {list.map((item: TLog) => (
              <ItemLog key={item.id} log={item} />
            ))}
          </div>
        )}
        {isloading && (
          <div className="grid lg:grid-cols-2 gap-6">
            {Array.from({ length: 10 }, (_, i) => i + 1).map((item: number) => (
              <div className="h-20 w-full bg-blur-black animate-pulse rounded-lg"></div>
            ))}
          </div>
        )}
        <div className="flex items-center">
          <Select
            defaultValue={String(pageCurrent)}
            onValueChange={handleChangePage}
          >
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder={String(pageCurrent)} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {Array.from({ length: count }, (_, i) => i + 1).map(
                  (item: number) => (
                    <SelectItem key={item} value={String(item)}>
                      Trang {item}
                    </SelectItem>
                  )
                )}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </main>
  );
}

export default LogsPage;
