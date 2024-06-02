import React from "react";

function ItemCard({ title,icon,sub, count }: { title: string, icon: React.ReactNode, sub: string, count: number }) {
  return (
    <div className="border border-border dask:border-white p-4 rounded-md flex flex-col">
      <div className="flex items-center justify-between">
        <h2 className="font-bold">{title}</h2>
        {icon}
      </div>
      <div className="flex flex-col mt-2 ">
        <h2 className="font-bold text-xl text-sky-600">{count?.toLocaleString()}</h2>
        <p className="text-xs text-muted-foreground">{sub}</p>
      </div>
    </div>
  );
}
export default ItemCard;
