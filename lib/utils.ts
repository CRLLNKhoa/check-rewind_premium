import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getColorForValueSingle(value:any) {
    const colors = [
        "bg-[#ADD8E6]", // Xanh dương nhạt
        "bg-[#87CEEB]", // Xanh da trời
        "bg-[#4682B4]", // Xanh biển
        "bg-[#0000CD]", // Xanh dương trung bình
        "bg-[#00008B]", // Xanh dương đậm
        "bg-[#8A2BE2]", // Tím
        "bg-[#FF00FF]", // Đỏ tím
        "bg-[#FF1493]", // Hồng cánh sen
        "bg-[#DC143C]", // Đỏ thẫm
        "bg-[#B22222]"  // Đỏ đậm
    ];

    if (value < 162 || value > 385) {
        throw new Error("Value out of range");
    }

    const ranges = [
        { min: 162, max: 184 },
        { min: 185, max: 207 },
        { min: 208, max: 230 },
        { min: 231, max: 253 },
        { min: 254, max: 276 },
        { min: 277, max: 299 },
        { min: 300, max: 322 },
        { min: 323, max: 345 },
        { min: 346, max: 368 },
        { min: 369, max: 385 }
    ];

    for (let i = 0; i < ranges.length; i++) {
        if (value >= ranges[i].min && value <= ranges[i].max) {
            return colors[i];
        }
    }

    return null; // Should never reach here if input is within range
}
