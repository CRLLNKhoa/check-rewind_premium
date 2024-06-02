"use client"
import React from 'react'
import { useState, useEffect } from 'react';

interface Gift {
    id: number;
    name: string;
    description: string;
    value: number;
    chance: number;
  }
  
  const gifts: Gift[] = [
    { id: 1, name: 'Vàng', description: 'Nhận được 100 đồng vàng', value: 100, chance: 0.1 },
    { id: 2, name: 'Bạc', description: 'Nhận được 50 đồng bạc', value: 50, chance: 0.3 },
    { id: 3, name: 'Đồng', description: 'Nhận được 20 đồng đồng', value: 20, chance: 0.6 },
  ];

function DailyReward() {
    const [currentGift, setCurrentGift] = useState<Gift | null>(null);
    const [lastClaimedDate, setLastClaimedDate] = useState<Date | null>(null);
  
    useEffect(() => {
      // Kiểm tra ngày người dùng đã nhận quà lần cuối
      const lastClaimedDateStr = localStorage.getItem('lastClaimedDate');
      if (lastClaimedDateStr) {
        const [day, month, year] = lastClaimedDateStr.split('/');
        setLastClaimedDate(new Date(parseInt(year), parseInt(month) - 1, parseInt(day)));
      }
    }, []);
  
    const claimReward = () => {
      // Chọn một phần quà dựa trên tỉ lệ
      let randomValue = Math.random();
      let selectedGift: Gift | null = null;
      for (const gift of gifts) {
        if (randomValue < gift.chance) {
          selectedGift = gift;
          break;
        }
        randomValue -= gift.chance;
      }
      setCurrentGift(selectedGift);
  
      // Lưu ngày người dùng đã nhận quà
      const today = new Date();
      const dateString = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
      localStorage.setItem('lastClaimedDate', dateString);
      setLastClaimedDate(today);
    };
  
    const canClaimReward = () => {
      // Kiểm tra xem người dùng có thể nhận quà trong ngày hôm nay hay không
      if (!lastClaimedDate) {
        return true;
      }
  
      const today = new Date();
      const lastClaimedDay = lastClaimedDate.getDate();
      const lastClaimedMonth = lastClaimedDate.getMonth() + 1;
      const lastClaimedYear = lastClaimedDate.getFullYear();
  
      // Nếu thời gian hiện tại đã qua thời gian đã lưu, cho phép người dùng nhận quà
      if (today.getFullYear() > lastClaimedYear || (today.getFullYear() === lastClaimedYear && today.getMonth() + 1 > lastClaimedMonth) || (today.getFullYear() === lastClaimedYear && today.getMonth() + 1 === lastClaimedMonth && today.getDate() > lastClaimedDay)) {
        return true;
      }
  
      return today.getDate() !== lastClaimedDay || today.getMonth() + 1 !== lastClaimedMonth || today.getFullYear() !== lastClaimedYear;
    };

  return (
    <div className='bg-blur-white p-4 rounded-lg backdrop-blur-md'>
      {canClaimReward() ? (
        currentGift ? (
          <div>
            <h2>Chúc mừng!</h2>
            <p>Bạn đã nhận được: {currentGift.name}</p>
            <p>{currentGift.description}</p>
            <p>Giá trị: {currentGift.value} đồng</p>
          </div>
        ) : (
          <button onClick={claimReward}>Nhận quà ngẫu nhiên</button>
        )
      ) : (
        <p>Bạn đã nhận phần quà rồi. Hãy quay lại vào ngày mai để nhận quà mới.</p>
      )}
    </div>
  );
}

export default DailyReward