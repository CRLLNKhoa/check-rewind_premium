"use client";
import React, { useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    subject: "Lượt xem",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Lượt bình luận",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Lượt bình luận",
    A: 98,
    B: 130,
    fullMark: 150,
  }
  ,
  {
    subject: "Lượt bình luận",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Lượt bình luận",
    A: 98,
    B: 130,
    fullMark: 150,
  }
  ,
  {
    subject: "Lượt bình luận",
    A: 98,
    B: 130,
    "fullMark": 150,
  }
];

function ChartLog() {
  return (
    <div className="flex flex-col bg-blur-black text-white mt-6 border p-4 border-border rounded-md dark:border-white/20">
      <h1 className="font-bold text-lg mb-4">Tỷ lệ thích</h1>
      <div className="flex items-center justify-center text-white">
        <ResponsiveContainer width="100%" height={200}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar
              name="Mike"
              dataKey="fullMark"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
            <Radar
              name="Mike"
              dataKey="A"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ChartLog;
