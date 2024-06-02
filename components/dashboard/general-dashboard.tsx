import React from "react";
import ItemCard from "./item-card";
import { FiEye } from "react-icons/fi";
import { RiHeart2Line } from "react-icons/ri";
import { BsChatSquareText } from "react-icons/bs";
import { PiUserRectangleThin } from "react-icons/pi";

function GeneralDashboard() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      <ItemCard
        title="Tổng lượt xem"
        icon={<FiEye />}
        count={1324231}
        sub="Tất cả lượt xem của tất cả bài viết"
      />
      <ItemCard
        title="Tổng lượt thích"
        icon={<RiHeart2Line />}
        count={1324231}
        sub="Tất cả lượt thích của tất cả bài viết"
      />
      <ItemCard
        title="Tổng lượt bình luận"
        icon={<BsChatSquareText />}
        count={1324231}
        sub="Tất cả lượt bình luận của tất cả bài viết"
      />
      <ItemCard
        title="Số người theo dõi"
        icon={<PiUserRectangleThin />}
        count={1324231}
        sub="Tất cả lượt theo dõi của tất cả bài viết"
      />
    </div>
  );
}

export default GeneralDashboard;
