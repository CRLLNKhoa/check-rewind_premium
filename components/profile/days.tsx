import React from "react";
import { TDays } from "./profile-game";

function Days({ days, setDays }: { days: TDays; setDays: any }) {
  return (
    <div className="bg-white p-2 rounded-lg max-w-xs">
      <input
        value={days.currDay}
        onChange={(e) => setDays({ ...days, currDay: e.target.value })}
        type="number"
        min={0}
        className="w-full h-8 outline-none pl-4"
        placeholder="Nhập day hiện tại của bạn..."
      />
    </div>
  );
}

export default Days;
