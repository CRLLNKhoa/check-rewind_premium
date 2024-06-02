import React from "react";
import { Button } from "../ui/button";
import ItemLog from "./item-log";

function ListNotificationsLog() {
  return (
    <div className="flex flex-col gap-4">
      <ItemLog />
      <ItemLog />
      <Button variant={"outline"}>Xem thêm</Button>
    </div>
  );
}

export default ListNotificationsLog;
