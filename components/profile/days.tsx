import React from "react";

function Days({ days, setDays }: { days: number; setDays: any }) {
  return (
    <div className="bg-white p-2 rounded-lg max-w-xs">
      <input
        required
        value={days}
        onChange={(e) => setDays( e.target.value )}
        type="number"
        min={0}
        className="w-full h-8 outline-none pl-4"
        placeholder="Nhập day hiện tại của bạn..."
      />
    </div>
  );
}

export default Days;
